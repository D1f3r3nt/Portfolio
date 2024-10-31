export const AboutHome = () => {
  return (
    <div className='w-full flex flex-col gap-y-12'>
        <span className='font-bold'>
            Get to know me:
        </span>

        <div className='w-full flex'>
            <div className='text-light pr-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?

                <br/>
                <br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?

                <br/>
                <br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non ipsa sed hic illum ex corrupti quasi, corporis consequatur praesentium fugiat perferendis sunt molestias temporibus placeat magnam aspernatur sequi iure pariatur reprehenderit maxime doloremque ut facilis illo. Corrupti, vel et?
            </div>

            <img
                src="../../src/assets/icons/perfil.webp"
                alt="Profile image"
                className='w-[175px] h-[175px] rounded rotate-6 border-[#FEF08A] border-2 mt-5 ml-5'
            />
        </div>
    </div>
  );
}