import {Page} from "../components/organisms/Page.tsx";
import {PresentationHome} from "../components/molecules/PresentationHome.tsx";
import {ProjectsHome} from "../components/molecules/ProjectsHome.tsx";

export const HomePage = () => {

    return (
        <Page>
            <div className='w-full lg:max-w-4xl md:max-w-2xl pt-[150px] flex flex-col gap-y-16'>
                <PresentationHome />

                <hr/>

                <ProjectsHome />

                <hr/>

                <div className='bg-red-600 h-[500px]'>
                    <div className='text-[30px]'>
                        Hi, I'm Marc Santisteban
                    </div>
                </div>
            </div>
        </Page>
    )
}