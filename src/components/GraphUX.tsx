import { Graph } from 'react-d3-graph';

import React, { useState } from 'react';

import { BaseNode,BaseLink,BaseGraph,VBaseGraph } from './NodeBase'; './NodeBase';

const data:BaseGraph=new VBaseGraph([],[],{});

const GraphUX: React.FC = () => {
    const [nodes, setNodes] = useState<BaseNode[]>([]);
    const [links,setLinks] =useState<BaseLink[]>([]);
    const [config,setConfig] =useState<Object>({});
    
    // Función para agregar un nuevo nodo 
    const addNode = (newNode: BaseNode) => {
        setNodes([...nodes, newNode]);
        data.updateNodes(nodes);
    };

    const addLink = (newLink:BaseLink)=> {
        setLinks([...links, newLink]);
        data.updateLinks(links);
    };

    const addConfig = (newconfig:Object)=>{
        setConfig(newconfig);
        data.updateConfig(config);
    }

    return (<Graph id="graph-id" data={data} config={data.config} />);
}

export default GraphUX ;