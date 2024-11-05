import {WorkButton} from "../atoms/WorkButton.tsx";
import {JOB, NAME} from "../../utils/Constants.ts";

export const PresentationHome = () => {

  return (
      <div className='w-full flex flex-col gap-y-8'>
          <WorkButton />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?
              </div>
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