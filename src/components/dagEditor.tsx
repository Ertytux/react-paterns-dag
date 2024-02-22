import React, { useState } from 'react';

//Tipos de nodo
enum TypeNode{
  InputNode,
  ProcessNode,
  OutputNode
}

// Definición de nodo 
interface DagNode {
  id: number;
  label: string;
  typeNode:TypeNode;
  description:string;
  inputNodes:DagNode[];
  value:number;
  evaluator():number;  
}

// Componente 
const DagComponent: React.FC = () => {
  // Estado para almacenar los nodos 
  const [nodes, setNodes] = useState<DagNode[]>([]);

  // Función para agregar un nuevo nodo 
  const addNode = (newNode: DagNode) => {
    setNodes([...nodes, newNode]);
  };

  //Funci'on para eliminar un nodo
  const removeNode = (oldNode:DagNode)=> {
    let index=nodes.findIndex(x=>x===oldNode);
    setNodes(nodes.splice(index));
  };

  // Renderizamos los nodos
  function renderNodes() {
    return nodes.map((node) => (
      <div key={node.id}>
        {node.label}
        {/* Puedes personalizar la representación visual de cada nodo */}
      </div>
    ));
  }

  return (
    <div>
      <h2>Componente DAG</h2>
      <button>
        Agregar Nodo
      </button>
      <div>{renderNodes()}</div>
    </div>
  );
};

export default DagComponent;
