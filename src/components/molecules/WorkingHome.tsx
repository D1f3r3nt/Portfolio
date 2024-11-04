import {WorkingItem} from "../atoms/WorkingItem.tsx";

export const WorkingHome = () => {
  return (
      <div className='w-full' id="working">
          <span className='font-bold'>
              Working experience:
          </span>

          <ol className='mt-16'>
              <WorkingItem
                  job={'Fullstack Developer'}
                  site={'Arteco'}
                  time={'Currently...'}
                  description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?'}
              />
              <WorkingItem
                  job={'Fullstack Developer'}
                  site={'Arteco'}
                  time={'Currently...'}
                  description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?'}
              />
              <WorkingItem
                  job={'Fullstack Developer'}
                  site={'Arteco'}
                  time={'Currently...'}
                  description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?'}
              />
              <WorkingItem
                  job={'Fullstack Developer'}
                  site={'Arteco'}
                  time={'Currently...'}
                  description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?'}
              />
          </ol>
      </div>
  );
}