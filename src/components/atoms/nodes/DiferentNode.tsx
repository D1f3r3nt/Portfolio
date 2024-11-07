import {memo} from "react";

export const DiferentNode = memo(() => {

    return (
        <div className='w-[100px] h-[100px]'>
            <img
                src="../../src/assets/icons/perfil.webp"
                alt="Profile image"
                className='w-full h-full rounded-full'
            />
        </div>
    )
})