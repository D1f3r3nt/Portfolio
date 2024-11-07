import {Background, ReactFlow, useReactFlow} from "@xyflow/react";
import {DiferentNode} from "../components/atoms/nodes/DiferentNode.tsx";
import '@xyflow/react/dist/style.css';
import {useCallback, useEffect} from "react";
import {LanguageNode} from "../components/atoms/nodes/LanguageNode.tsx";
import {NODES} from "../utils/nodes/nodes.ts";
import {EDGES} from "../utils/nodes/edges.ts";

const NODE_TYPES = {
    diferent: DiferentNode,
    language: LanguageNode,
}

export const BrainPage = () => {

    const {setCenter} = useReactFlow()

    const centerNode = useCallback(() => {
        const node = NODES[0];
        const x = node.position.x;
        const y = node.position.y;
        setCenter(x, y, {zoom: 0.7, duration: 0});
    }, [setCenter]);

    useEffect(() => {
        centerNode();
    }, [centerNode]);

    return (
        <div className='w-full h-[100vh] flex justify-center items-center background-gradient'>
            <ReactFlow
                id='flow'
                nodes={NODES}
                edges={EDGES}
                nodeTypes={NODE_TYPES}
                minZoom={0.7}
                maxZoom={1.3}
            >
                <Background color='transparent'/>
            </ReactFlow>
        </div>
    )
}