import {WorkButton} from "../../atoms/home/WorkButton.tsx";
import {EMAIL, JOB, NAME, PRE_BODY, SUBJECT} from "../../../utils/constants.ts";
import {PresentationButton} from "../../atoms/home/PresentationButton.tsx";
import {navigateOutside} from "../../../helpers/helper.ts";
import {useNavigate} from "react-router-dom";

export const PresentationHome = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col gap-y-8'>
            <WorkButton/>
            <div className='w-full grid grid-cols-3'>
                <div className='w-full col-span-2'>
                    <div className='text-[36px] font-bold'>
                        {NAME}
                    </div>
                    <div className='text-[30px] strong-style'>
                        {
                            JOB.split('\n').map((value, index) => {
                                if (index === 0) {
                                    return (<>{value}</>)
                                } else {
                                    return (<><br/>{value}</>)
                                }
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src="../src/assets/icons/flat_web.svg" alt="Web developer" className='h-[125px]'/>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='text-light col-span-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti
                    quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam
                    aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?
                </div>
            </div>
            <div className='w-full flex gap-x-2'>
                <PresentationButton
                    onClick={() => {
                        navigateOutside(`mailto:${EMAIL}?subject=${SUBJECT}&body=${PRE_BODY}`)
                    }}
                    src={"../src/assets/icons/dialog.svg"}
                    label={"Contact me"}
                />
                <PresentationButton
                    onClick={() => {
                        // TODO: Dowload CV
                    }}
                    src={"../src/assets/icons/download.svg"}
                    label={"Download CV"}
                />
                <PresentationButton
                    onClick={() => {
                        navigate("/brain")
                    }}
                    src={"../src/assets/icons/mind_map.svg"}
                    label={"Mind map"}
                />
            </div>
            <div className='w-full grid grid-cols-2'>
                <div className='flex justify-center'>
                    <img src="../src/assets/icons/flat_cloud.svg" alt="Solution Architect" className='h-[125px]'/>
                </div>
                <div className='flex justify-center'>
                    <img src="../src/assets/icons/flat_mobile.svg" alt="Mobile developer" className='h-[125px]'/>
                </div>
            </div>
        </div>
    )
}