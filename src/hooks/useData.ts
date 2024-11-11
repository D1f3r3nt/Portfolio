import {useEffect, useState} from "react";

interface ExperienceData {
    title: string;
    date: string;
    description: string;
}

interface StudiesData {
    title: string;
    place: string;
    date: string;
    url?: string;
}

interface MyData {
    summary: string;
    description: string;
}

export const useData = () => {

    const [experiences, setExperiences] = useState<ExperienceData[]>([]);
    const [certificates, setCertificates] = useState<StudiesData[]>([]);
    const [myData, setMyData] = useState<MyData>();
    const [isLoading, setIsLoading] = useState(true)

    const loadData = async (json: string) => {
        const response = await fetch(json)
        return await response.json()
    }

    useEffect(() => {
        const load = async () => {
            setIsLoading(true);

            const resExp = await loadData('/experience.json');
            setExperiences(resExp.data);

            const resMy = await loadData('/me.json');
            setMyData(resMy);

            const resCer = await loadData('/studies.json');
            setCertificates(resCer.certificates.reverse());

            setIsLoading(false)
        }

        load()
    }, []);

    return {
        experiences,
        certificates,
        myData,
        isLoading
    }
}