import {memo} from "react";
import {LanguageNodeTypo} from "./NodeProps.ts";
import {getColors, getIcon} from "../../../utils/languageHelper.tsx";
import {CustomNode} from "./CustomNode.tsx";

interface LanguageNodeProps {
    data: LanguageNodeTypo
}

export const LanguageNode = memo(({data}: LanguageNodeProps) => {

    return (
        <CustomNode>
            <div
                className={`w-full h-full p-4 flex flex-col justify-center items-center rounded ${getColors(data.language)}`}>
                <div className='[&>svg]:w-[30px] [&>svg]:h-[30px]'>{getIcon(data.language)}</div>
                <span className='text-[14px]'>{data.language}</span>
            </div>
        </CustomNode>
    )
})