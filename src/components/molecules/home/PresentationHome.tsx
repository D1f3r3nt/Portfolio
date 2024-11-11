import {WorkButton} from "../../atoms/home/WorkButton.tsx";
import {EMAIL, JOB, NAME, PRE_BODY, SUBJECT} from "../../../utils/constants.ts";
import {PresentationButton} from "../../atoms/home/PresentationButton.tsx";
import {navigateOutside} from "../../../helpers/helper.ts";
import {useNavigate} from "react-router-dom";
import {formater} from "../../../utils/formater.tsx";

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
                            formater(JOB)
                        }
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src="/icons/flat_web.svg" alt="Web developer" className='h-[125px] md:block hidden'/>
                </div>
            </div>
            <div className='w-full md:grid md:grid-cols-3'>
                <div className='text-light md:col-span-2'>
                    {/*{formater()}*/}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti
                    quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam
                    aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?
                </div>
            </div>
            <div className='w-full flex flex-wrap gap-2'>
                <PresentationButton
                    onClick={() => {
                        navigateOutside(`mailto:${EMAIL}?subject=${SUBJECT}&body=${PRE_BODY}`)
                    }}
                    src={"/icons/dialog.svg"}
                    label={"Contact me"}
                />
                <PresentationButton
                    onClick={() => {
                        // TODO: Dowload CV
                    }}
                    src={"/icons/download.svg"}
                    label={"Download CV"}
                />
                <PresentationButton
                    onClick={() => {
                        navigate("/brain")
                    }}
                    src={"/icons/mind_map.svg"}
                    label={"Mind map"}
                />
            </div>
            <div className='w-full grid grid-cols-2'>
                <div className='flex justify-center'>
                    <img src="/icons/flat_cloud.svg" alt="Solution Architect" className='h-[125px] md:block hidden'/>
                </div>
                <div className='flex justify-center'>
                    <img src="/icons/flat_mobile.svg" alt="Mobile developer" className='h-[125px] md:block hidden'/>
                </div>
            </div>
        </div>
    )
}