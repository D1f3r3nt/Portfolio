import {ProjectItem} from "../../atoms/ProjectItem.tsx";
import {Language} from "../../../utils/Language.ts";
import {ShowMoreButton} from "../../atoms/home/ShowMoreButton.tsx";
import { useNavigate} from "react-router-dom";

export const ProjectsHome = () => {
    const navigate = useNavigate()

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

            <ShowMoreButton label={'projects'} onClick={() => navigate('/projects') } />
        </div>
    )
}