import {CustomNode} from "./CustomNode.tsx";
import {DataNode} from "./NodeProps.ts";

interface SubTechnologyNodeProps {
    data: DataNode
}

export const SubTechnologyNode = ({data}: SubTechnologyNodeProps) => {
    return (
        <CustomNode>
            <div className='w-full h-full hexagon bg-blue-600 p-4 text-[15px] hover:scale-105'>
                {data.label}
            </div>
        </CustomNode>
    )
}