import {Github, LinkedIn, StackOverflow} from "../../../utils/Icons.tsx";
import {LinkButton} from "../../atoms/LinkButton.tsx";
import {GITHUB, LINKEDIN, STACK_OVERFLOW} from "../../../utils/Constants.ts";

export const AboutHome = () => {
    return (
        <div className='w-full flex flex-col gap-y-12' id="about">
        <span className='font-bold'>
            Get to know me:
        </span>

            <div className='w-full grid grid-cols-4'>
                <div className='text-light pr-10 col-span-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?

                    <br/>
                    <br/>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?

                    <br/>
                    <br/>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?
                </div>

                <div className='flex flex-col items-center gap-y-4'>
                    <img
                        src="../../src/assets/icons/perfil.webp"
                        alt="Profile image"
                        className='w-[175px] h-[175px] rounded border-[#FEF08A] border-2 mt-5'
                    />
                    <div className='flex w-[175px] justify-between'>
                        <LinkButton href={GITHUB}><Github/></LinkButton>
                        <LinkButton href={STACK_OVERFLOW}><StackOverflow/></LinkButton>
                        <LinkButton href={LINKEDIN}><LinkedIn/></LinkButton>
                    </div>
                </div>

            </div>
        </div>
    );
}