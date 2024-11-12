import {ProjectItem} from "../../atoms/ProjectItem.tsx";
import {ShowMoreButton} from "../../atoms/home/ShowMoreButton.tsx";
import {useNavigate} from "react-router-dom";
import {useGithubData} from "../../../hooks/useGithubData.ts";
import {Loader} from "../../atoms/Loader.tsx";

export const ProjectsHome = () => {
    const navigate = useNavigate()
    const {isLoading, data} = useGithubData()
    const offset = 3;

    return (
        <div className='w-full flex flex-col gap-y-12' id="projects">
            <span className='font-bold'>
                Here are some projects I've worked on:
            </span>

            {
                isLoading &&
                <Loader />
            }
            {
                !isLoading &&
                data.length > 0 &&
                data.slice(0, offset).map(value => <ProjectItem
                    key={value.id}
                    title={value.name}
                    description={value.description}
                    gitUrl={value.url}
                    languages={value.languages}
                    webUrl={value.website}
                />)
            }
            {
                !isLoading &&
                data.length > offset &&
                <ShowMoreButton label={'projects'} onClick={() => navigate('/projects')}/>
            }
        </div>
    )
}