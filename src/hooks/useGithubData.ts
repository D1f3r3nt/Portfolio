import axios from "axios";
import {useEffect, useState} from "react";
import {Language} from "../utils/language.ts";
import {getLanguageFromTopic} from "../helpers/helper.ts";
import {GITHUB_PROFILE} from "../utils/constants.ts";

interface GithubData {
    id: string;
    name: string;
    html_url: string;
    description: string;
    homepage?: string;
    topics: string[];
}

interface GithubResponse {
    id: string;
    name: string;
    url: string;
    website?: string;
    description: string;
    languages: Language[];
}

export const useGithubData = () => {

    const prefix = "github_pat_"
    const GITHUB_TOKEN = "11AXPHYDY03iMrev7xstAB_oMNcoPngmvEHXidI3Lxe1X5rQ70so2v7AzfLd3TJUbUO32AZM3ZPjlQgD7n";
    const [data, setData] = useState<GithubResponse[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMyData()
    }, []);

    const githubAPI = axios.create({
        baseURL: 'https://api.github.com',
        headers: {
            'Authorization': `Bearer ${prefix+GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
        },
    });

    const getMyData = async ()=> {
        try {
            setIsLoading(true)
            const response = await githubAPI.get('/user/repos?sort=updated&type=public&direction=desc');
            const repos = response.data;

            const data = repos.map((repo: GithubData) => {
                const languages = repo.topics.map(value => getLanguageFromTopic(value))

                return ({
                    id: repo.id,
                    url: repo.html_url,
                    name: repo.name,
                    description: repo.description,
                    languages: languages,
                    website: repo.homepage
                } as GithubResponse)
            }).filter((repo: GithubData) => repo.name !== GITHUB_PROFILE);

            setData(data)
            setIsLoading(false)
        } catch (_) {
            console.error('Error fetching repositories');
        }
    }

    return {
        data,
        isLoading
    };
};