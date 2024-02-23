import { Graph } from 'react-d3-graph'

import React, { useState } from 'react'

import {
  BaseNode,
  BaseLink,
  BaseGraph,
  VBaseGraph,
  DefaultNode,
  DefaultBaseLink
} from './NodeBase'
;('./NodeBase')

const data: BaseGraph = new VBaseGraph([], [], {})

const GraphUX = () => {
  const [nodes, setNodes] = useState<BaseNode[]>([])
  const [links, setLinks] = useState<BaseLink[]>([])
  const [config, setConfig] = useState<Object>([])

  /*
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
    }*/
   
    // Inicializar con nodo vac'io  
  const snode: BaseNode = new DefaultNode()
  setNodes([...nodes, snode])
  const slink: BaseLink = new DefaultBaseLink()
  setLinks([...links, slink])
  setConfig([config, {}])

  return <Graph id='graph-id' data={data} config={data.config} />
}
export default GraphUX
