import {Background, ReactFlow, useReactFlow} from "@xyflow/react";
import {DiferentNode} from "../components/atoms/nodes/DiferentNode.tsx";
import '@xyflow/react/dist/style.css';
import {useCallback, useEffect} from "react";

export const BrainPage = () => {

    const { setCenter } = useReactFlow()

    const nodeTypes = {
        diferent: DiferentNode
    }

    const nodes = [
        {
            id: '1',
            data: { label: 'hola' },
            position: { x: 20, y: 0 },
            type: 'diferent',
        },
    ];

    const centerNode = useCallback(() => {
        const node = nodes[0];
        const x = node.position.x;
        const y = node.position.y;
        setCenter(x, y, { zoom: 1, duration: 0 });
    }, [setCenter]);

    useEffect(() => {
        centerNode();
    }, [centerNode]);

    return (
        <div className='w-full h-[100vh] flex justify-center items-center background-gradient'>
            <ReactFlow
                id='flow'
                nodes={nodes}
                nodeTypes={nodeTypes}
            >
                <Background color='transparent' />
            </ReactFlow>
        </div>
    )
}