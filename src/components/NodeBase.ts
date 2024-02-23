//Tipos de nodo
export enum TypeNode{
  InputNode,
  ProcessNode,
  OutputNode
}

// Definición B'asica de nodo 
export interface BaseNode {
  id: string; //Identificador del nodo num'erico
  label: string; //etiqueta adicional al id
  typeNode:TypeNode; //tipo de nodo seg'un TypeNode
  description:string; //Descripci'on
  inputNodes:BaseNode[];//Nodos que tienen relaci'on con el nodo actual
  value:number;//Evaluaci'on del nodo
  evaluator():void; //m'ertodo que eval'ua 
  get getValue():number; //getter
}

//Definici'on B'asica de Relaci'on entre nodos
export interface BaseLink{
  source:string;//origen
  target:string;//destino
  weight:number;//peso
}

//Definici'on de Gr'afico de relaci'on
export interface BaseGraph{//compatible con Graph data de react-d3-graph
  config:Object;//{}
  nodes:BaseNode[];
  links:BaseLink[];
  updateNodes(newnodes:BaseNode[]):void;
  updateLinks(newlinks:BaseLink[]):void;
  updateConfig(newconfig:Object):void;
}

export class VBaseGraph implements BaseGraph{
  config:Object;//{}
  nodes:BaseNode[];
  links:BaseLink[];
  constructor(nodesin:BaseNode[],links:BaseLink[],config:Object){
    this.config=config;
    this.nodes=nodesin;
    this.links=links;
  }
  updateNodes(newnodes:BaseNode[]):void{
    this.nodes=newnodes;
  }
  updateLinks(newlinks:BaseLink[]):void{
    this.links=newlinks;
  }
  updateConfig(newconfig:Object):void{
    this.config=newconfig;
  }

}


