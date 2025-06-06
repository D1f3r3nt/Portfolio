import {Github, LinkedIn, StackOverflow} from "../../../utils/icons.tsx";
import {LinkButton} from "../../atoms/LinkButton.tsx";
import {GITHUB, LINKEDIN, STACK_OVERFLOW} from "../../../utils/constants.ts";
import {useData} from "../../../hooks/useData.ts";
import {formater} from "../../../utils/formater.tsx";

export const AboutHome = () => {
    const {myData} = useData()

    return (
        <div className='w-full flex flex-col gap-y-12' id="about">
        <span className='font-bold'>
            Get to know me:
        </span>

            <div className='w-full flex flex-col-reverse md:grid md:grid-cols-4'>
                <div className='text-light md:pr-10 md:col-span-3'>
                    {   myData &&
                        formater(myData.description)
                    }
                </div>

                <div className='flex flex-col mb-5 md:mb-0 items-center gap-y-4'>
                    <img
                        src="/icons/perfil.webp"
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