import {CustomNode} from "./CustomNode.tsx";
import {DataNode} from "./NodeProps.ts";

interface BeamNodeProps {
    data: DataNode
}

export const BeamNode = ({ data }: BeamNodeProps) => {
  return (
      <CustomNode>
          <div className='w-full h-full inner-curve bg-blue-700 p-4 hover:scale-105'>
              {data.label}
          </div>
      </CustomNode>
  )
}