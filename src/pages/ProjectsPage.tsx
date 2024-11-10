import {Page} from "../components/organisms/Page.tsx";
import {Language} from "../utils/language.ts";
import {ProjectItem} from "../components/atoms/ProjectItem.tsx";
import {BackButton} from "../components/atoms/BackButton.tsx";
import {LanguageTag} from "../components/atoms/LanguageTag.tsx";
import {useFilterLanguages} from "../hooks/useFilterLanguages.ts";
import {useGithubData} from "../hooks/useGithubData.ts";
import {Loader} from "../components/atoms/Loader.tsx";

export const ProjectsPage = () => {

    const {allLanguages, selectedLanguages, toggleLanguage} = useFilterLanguages();
    const {isLoading, data} = useGithubData()

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
                    data.length > 0 &&
                    data.map(value => <ProjectItem
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