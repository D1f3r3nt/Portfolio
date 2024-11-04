import {Language} from "../../utils/Language.ts";
import {LanguageTag} from "./LanguageTag.tsx";

interface ProjectItemProps {
    title: string;
    description: string;
    languages?: Language[]
}

export const ProjectItem = ({
    description,
    title,
    languages
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
                  <LanguageTag language={Language.Flutter}/>
                  <LanguageTag language={Language.NodeJS}/>
                  <LanguageTag language={Language.JavaScript}/>
              </div>
              <div className='text-light'>
                  {description}
              </div>
          </div>
      </div>
  )
}