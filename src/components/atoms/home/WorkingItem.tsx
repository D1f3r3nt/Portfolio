interface WorkingItemProps {
    job: string;
    site: string;
    time: string;
    description: string;
}

export const WorkingItem = ({
    job,
    time,
    site,
    description
} : WorkingItemProps) => {
  return (
      <li>
          <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
              <div className='pb-12 md:col-span-2'>
                  <div className='sticky top-0'>
                      <span className='strong-style -left-[42px] absolute rounded-full text-5xl'>•</span>
                      <h3 className='text-xl font-bold strong-style'>{ job }</h3>
                      <h4 className='text-xl font-semibold'>{ site }</h4>
                      <div className='text-sm text-light p-0 m-0'>{ time }</div>
                  </div>
              </div>
              <div className='flex flex-col gap-2 pb-4 text-light md:col-span-3'>
                  { description }
              </div>
          </div>
      </li>
  );
}