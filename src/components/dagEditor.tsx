import React, { useState } from 'react';

// Definimos el tipo para los nodos del DAG
interface DagNode {
  id: string;
  label: string;
  // Puedes agregar más propiedades según tus necesidades
}

// Componente DAG
const DagComponent: React.FC = () => {
  // Estado para almacenar los nodos del DAG
  const [nodes, setNodes] = useState<DagNode[]>([]);

  // Función para agregar un nuevo nodo al DAG
  const addNode = (newNode: DagNode) => {
    setNodes([...nodes, newNode]);
  };

  // Renderizamos los nodos
  const renderNodes = () => {
    return nodes.map((node) => (
      <div key={node.id}>
        {node.label}
        {/* Puedes personalizar la representación visual de cada nodo */}
      </div>
    ));
  };

  return (
    <div>
      <h2>Componente DAG</h2>
      <button onClick={() => addNode({ id: '1', label: 'Nodo 1' })}>
        Agregar Nodo
      </button>
      <div>{renderNodes()}</div>
    </div>
  );
};

export default DagComponent;
