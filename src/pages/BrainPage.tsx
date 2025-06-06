import {Background, ReactFlow, useNodesState, useReactFlow} from "@xyflow/react";
import {DiferentNode} from "../components/atoms/nodes/DiferentNode.tsx";
import '@xyflow/react/dist/style.css';
import {useCallback, useEffect} from "react";
import {LanguageNode} from "../components/atoms/nodes/LanguageNode.tsx";
import {NODES} from "../utils/nodes/nodes.ts";
import {BeamNode} from "../components/atoms/nodes/BeamNode.tsx";
import {useCustomEdges} from "../utils/nodes/edges.ts";
import {TechnologyNode} from "../components/atoms/nodes/TechnologyNode.tsx";
import {SubTechnologyNode} from "../components/atoms/nodes/SubTechnologyNode.tsx";

const NODE_TYPES = {
    diferent: DiferentNode,
    language: LanguageNode,
    beam: BeamNode,
    technology: TechnologyNode,
    subTechnology: SubTechnologyNode,
}

export const BrainPage = () => {

    const {setCenter} = useReactFlow()
    const edges = useCustomEdges()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [nodes, _, onNodesChange] = useNodesState(NODES);

    const centerNode = useCallback(() => {
        const node = nodes[0];
        const x = node.position.x;
        const y = node.position.y;
        setCenter(x, y, {zoom: 0.6, duration: 0});
    }, [setCenter]);

    useEffect(() => {
        centerNode();
    }, [centerNode]);

    return (
        <div className='w-full h-[100vh] flex justify-center items-center background-gradient'>
            <ReactFlow
                id='flow'
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                nodeTypes={NODE_TYPES}
                minZoom={0.6}
                maxZoom={1.3}
            >
                <Background color='transparent'/>
            </ReactFlow>
        </div>
    )
}