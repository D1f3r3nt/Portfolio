import {CustomNode} from "./CustomNode.tsx";
import {DataNode} from "./NodeProps.ts";

interface TechnologyNodeProps {
    data: DataNode
}

export const TechnologyNode = ({data}: TechnologyNodeProps) => {
  return (
      <CustomNode>
          <div className='w-full h-full hexagon bg-violet-800 p-4 text-[15px] hover:scale-105'>
              {data.label}
          </div>
      </CustomNode>
  )
}