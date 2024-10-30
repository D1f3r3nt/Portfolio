interface ProjectItemProps {
    title: string;
    description: string;
}

export const ProjectItem = ({
    description,
    title
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
              <div className='text-light'>
                  {description}
              </div>
          </div>
      </div>
  )
}