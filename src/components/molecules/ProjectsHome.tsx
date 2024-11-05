import {ProjectItem} from "../atoms/ProjectItem.tsx";
import {Language} from "../../utils/Language.ts";

export const ProjectsHome = () => {

    return (
        <div className='w-full flex flex-col gap-y-12' id="projects">
            <span className='font-bold'>
                Here are some projects I've worked on:
            </span>

            <ProjectItem
                title={'Project Name 1'}
                description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ad neque doloribus quod exercitationem est nulla reiciendis in unde eum.'}
                languages={[Language.Jetpack]}
                gitUrl='https://porfolio.dev/'
                webUrl='https://porfolio.dev/'
            />
        </div>
    )
}