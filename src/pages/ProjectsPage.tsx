import {Page} from "../components/organisms/Page.tsx";
import {Language} from "../utils/Language.ts";
import {ProjectItem} from "../components/atoms/ProjectItem.tsx";
import {BackButton} from "../components/atoms/BackButton.tsx";
import {LanguageTag} from "../components/atoms/LanguageTag.tsx";
import {useFilterLanguages} from "../hooks/useFilterLanguages.ts";

export const ProjectsPage = () => {

    const {allLanguages, selectedLanguages, toggleLanguage} = useFilterLanguages();

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
                <ProjectItem
                    title={'Project Name 1'}
                    description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ad neque doloribus quod exercitationem est nulla reiciendis in unde eum.'}
                    languages={[Language.Jetpack]}
                    gitUrl='https://porfolio.dev/'
                    webUrl='https://porfolio.dev/'
                />

                <ProjectItem
                    title={'Project Name 1'}
                    description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ad neque doloribus quod exercitationem est nulla reiciendis in unde eum.'}
                    languages={[Language.Swift, Language.Jetpack]}
                    gitUrl='https://porfolio.dev/'
                    webUrl='https://porfolio.dev/'
                />

                <ProjectItem
                    title={'Project Name 1'}
                    description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ad neque doloribus quod exercitationem est nulla reiciendis in unde eum.'}
                    languages={[Language.Jetpack, Language.Java]}
                    gitUrl='https://porfolio.dev/'
                    webUrl='https://porfolio.dev/'
                />

                <ProjectItem
                    title={'Project Name 1'}
                    description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ad neque doloribus quod exercitationem est nulla reiciendis in unde eum.'}
                    languages={[Language.Flutter]}
                    gitUrl='https://porfolio.dev/'
                    webUrl='https://porfolio.dev/'
                />
            </div>
        </Page>
    );
}