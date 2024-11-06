import {Page} from "../components/organisms/Page.tsx";
import {Language} from "../utils/Language.ts";
import {ProjectItem} from "../components/atoms/ProjectItem.tsx";
import {BackButton} from "../components/atoms/BackButton.tsx";

export const ProjectsPage = () => {

    return (
        <Page showNavbar={false}>

            <BackButton label={'My Projects'} />

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