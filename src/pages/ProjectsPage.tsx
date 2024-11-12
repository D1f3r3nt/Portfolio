import {Page} from "../components/organisms/Page.tsx";
import {Language} from "../utils/language.ts";
import {ProjectItem} from "../components/atoms/ProjectItem.tsx";
import {BackButton} from "../components/atoms/BackButton.tsx";
import {LanguageTag} from "../components/atoms/LanguageTag.tsx";
import {useFilterLanguages} from "../hooks/useFilterLanguages.ts";
import {useGithubData} from "../hooks/useGithubData.ts";
import {Loader} from "../components/atoms/Loader.tsx";
import {useEffect, useState} from "react";

export const ProjectsPage = () => {

    const {allLanguages, selectedLanguages, toggleLanguage} = useFilterLanguages();
    const {isLoading, data} = useGithubData()
    const [currentProjects, setCurrentProjects] = useState(data)

    useEffect(() => {
        if (selectedLanguages.length === 0) {
            setCurrentProjects(data)
            return;
        }

        const filterProjects = data.filter(dato => {

            for (const item of selectedLanguages) {
                if (dato.languages.includes(item)) {
                    return true;
                }
            }

            return false;
        })

        setCurrentProjects(filterProjects)

    }, [isLoading, data, selectedLanguages]);

    return (
        <Page showNavbar={false}>

            <BackButton label={'My Projects'}/>

            <div
                className='w-[75%] flex flex-wrap gap-y-2 gap-x-1 overflow-hidden justify-center items-center self-center'>
                {
                    allLanguages.map(
                        (language: Language) =>
                            <LanguageTag
                                key={language}
                                language={language}
                                clickable={true}
                                clicked={selectedLanguages.includes(language)}
                                setClicked={() => toggleLanguage(language)}
                            />
                    )
                }
            </div>

            <div className='w-full flex flex-col gap-y-12'>
                {
                    isLoading &&
                    <Loader/>
                }
                {
                    !isLoading &&
                    currentProjects.length > 0 &&
                    currentProjects.map(value => <ProjectItem
                        key={value.id}
                        title={value.name}
                        description={value.description}
                        gitUrl={value.url}
                        languages={value.languages}
                        webUrl={value.website}
                    />)
                }
            </div>
        </Page>
    );
}