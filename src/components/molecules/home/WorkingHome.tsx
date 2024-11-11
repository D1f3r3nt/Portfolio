import {WorkingItem} from "../../atoms/home/WorkingItem.tsx";
import {useData} from "../../../hooks/useData.ts";
import {Loader} from "../../atoms/Loader.tsx";

export const WorkingHome = () => {

    const {isLoading, experiences}= useData();

    return (
        <div className='w-full' id="working">
          <span className='font-bold'>
              Working experience:
          </span>

            <ol className='mt-16'>
                {
                    isLoading &&
                    <Loader />
                }
                {
                    !isLoading &&
                    experiences.length > 0 &&
                    experiences.map(exp => <WorkingItem
                        job={exp.title}
                        site={exp.place}
                        time={exp.date}
                        description={exp.description}
                    />)
                }
            </ol>
        </div>
    );
}