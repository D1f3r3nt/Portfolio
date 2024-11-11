import {memo} from "react";
import {CustomNode} from "./CustomNode.tsx";

export const DiferentNode = memo(() => {

    return (
        <CustomNode>
            <img
                src="/icons/perfil.webp"
                alt="Profile image"
                className='w-full h-full rounded-full hover:scale-105'
            />
        </CustomNode>

    )
})