import {Language} from "../../utils/language.ts";
import {LanguageTag} from "./LanguageTag.tsx";
import {LinkButton} from "./LinkButton.tsx";
import {Github} from "../../utils/icons.tsx";

interface ProjectItemProps {
    title: string;
    description: string;
    gitUrl: string;
    webUrl?: string;
    languages?: Language[]
}

export const ProjectItem = ({
    description,
    title,
    languages,
    gitUrl,
    webUrl
} : ProjectItemProps) => {
  return (
      <div className='w-full flex align-top gap-x-2'>
          <div>
              <img src="../src/assets/icons/check.svg" alt="Checkmark" className='w-[32px] h-auto'/>
          </div>
          <div className='flex flex-col gap-y-2'>
              <div className='font-bold'>
                  {title}
              </div>

              <div className='flex gap-x-2'>
                  {
                      languages?.map(value => <LanguageTag key={value} language={value}/>)
                  }
              </div>

              <div className='text-light'>
                  {description}
              </div>

              <div className='flex gap-x-2'>
                  <LinkButton href={gitUrl} className='w-min flex justify-center items-center rounded-[12px]' >
                      <Github /><span className='ml-1 text-[15px]'>Code</span>
                  </LinkButton>
                  {
                      webUrl &&
                      <LinkButton href={webUrl} className='w-min flex justify-center items-center px-4 rounded-[12px]' >
                          <img src="../src/assets/icons/link.svg" alt="Link" className='w-[18px] h-auto'/>
                          <span className='ml-1 text-[15px]'>Preview</span>
                      </LinkButton>
                  }
              </div>
          </div>
      </div>
  )
}