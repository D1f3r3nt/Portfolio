import {Page} from "../components/organisms/Page.tsx";
import {PresentationHome} from "../components/molecules/PresentationHome.tsx";
import {ProjectsHome} from "../components/molecules/ProjectsHome.tsx";
import {WorkingHome} from "../components/molecules/WorkingHome.tsx";
import {AboutHome} from "../components/molecules/AboutHome.tsx";

export const HomePage = () => {

    return (
        <Page>
            <div className='w-full lg:max-w-4xl md:max-w-2xl py-[150px] flex flex-col gap-y-16 px-4'>
                <PresentationHome />

                <hr/>

                <WorkingHome />

                <hr/>

                <ProjectsHome />

                <hr/>

                <AboutHome />
            </div>
        </Page>
    )
}