//Tipos de nodo
export enum TypeNode {
  DefaultNode,
  InputNode,
  ProcessNode,
  OutputNode
}

// Definición B'asica de nodo
export interface BaseNode {
  //Node d3-react properties
  id: string
  cx: number
  cy: number
  fill: string
  fontSize: number
  fontColor: string
  fontWeight: string
  dx: number
  label: string
  labelPosition: string
  opacity: number
  renderLabel: boolean
  size: number
  stroke: string
  strokeWidth: number
  svg: string
  type: string
  viewGenerator: any
  className: string
  onClickNode: any
  onRightClickNode: any
  onMouseOverNode: any
  onMouseOutNode: any

  //Patern properties
  typeNode: TypeNode //tipo de nodo seg'un TypeNode
  description: string //Descripci'on
  inputNodes: BaseNode[] //Nodos que tienen relaci'on con el nodo actual
  value: number //Evaluaci'on del nodo
  evaluator(): void //m'ertodo que eval'ua 
}

export class DefaultNode implements BaseNode {
  //Node d3-react properties Defaults
  //https://danielcaldas.github.io/react-d3-graph/docs/index.html
  id: string = ''
  cx: number = 0
  cy: number = 0
  fill: string = 'green'
  fontSize: number = 8
  fontColor: string = 'black'
  fontWeight: string = 'normal'
  dx: number = 0
  label: string = ''
  labelPosition: string = ''
  opacity: number = 1
  renderLabel: boolean = true
  size: number = 200
  stroke: string = 'none'
  strokeWidth: number = 1
  svg: string = 'none'
  type: string = ''
  viewGenerator: any = null
  className: string = 'DefaultNode'
  onClickNode: any = null
  onRightClickNode: any = null
  onMouseOverNode: any = null
  onMouseOutNode: any = null

  //Patern properties
  typeNode: TypeNode = TypeNode.DefaultNode
  description: string = ''
  inputNodes: BaseNode[] = []
  value: number = 0
  evaluator(): void {}  
}

//Definici'on B'asica de Relaci'on entre nodos
export interface BaseLink {
  //Link d3-react properties
  d: string
  source: string
  target: string
  markerId: string
  strokeWidth: number
  stroke: string
  strokeDasharray: string
  strokeDashoffset: string
  strokeLinecap: string
  className: string
  opacity: number
  mouseCursor: string
  onClickLink: any
  onRightClickLink: any
  onMouseOverLink: any
  onMouseOutLink: any
}

export class DefaultBaseLink implements BaseLink {
  //Link d3-react properties
  //https://danielcaldas.github.io/react-d3-graph/docs/index.html
  d: string = ''
  source: string = ''
  target: string = ''
  markerId: string = ''
  strokeWidth: number = 1.5
  stroke: string = 'green'
  strokeDasharray: string = '5 1'
  strokeDashoffset: string = '3'
  strokeLinecap: string = 'round'
  className: string = 'link'
  opacity: number = 1
  mouseCursor: string = 'pointer'
  onClickLink: any = null
  onRightClickLink: any = null
  onMouseOverLink: any = null
  onMouseOutLink: any = null
}

//Definici'on de Gr'afico de relaci'on
export interface BaseGraph {
  //compatible con Graph data de react-d3-graph
  config: Object //{}
  nodes: BaseNode[]
  links: BaseLink[]
  updateNodes(newnodes: BaseNode[]): void
  updateLinks(newlinks: BaseLink[]): void
  updateConfig(newconfig: Object): void
}

export class VBaseGraph implements BaseGraph {
  config: Object //{}
  nodes: BaseNode[]
  links: BaseLink[]
  constructor(nodesin: BaseNode[], links: BaseLink[], config: Object) {
    this.config = config
    this.nodes = nodesin
    this.links = links
  }
  updateNodes(newnodes: BaseNode[]): void {
    this.nodes = newnodes
  }
  updateLinks(newlinks: BaseLink[]): void {
    this.links = newlinks
  }
  updateConfig(newconfig: Object): void {
    this.config = newconfig
  }
}
