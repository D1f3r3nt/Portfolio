import {ReactNode} from "react";
import {Handle, Position} from "@xyflow/react";

interface CustomNode {
    children: ReactNode;
}

export const CustomNode = ({children}: CustomNode) => {
  return (
      <>
          <Handle type="source" position={Position.Top}/>
          <Handle type="target" position={Position.Bottom}/>
          {children}
      </>
  )
}