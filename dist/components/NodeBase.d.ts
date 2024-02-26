export declare enum TypeNode {
    DefaultNode = 0,
    InputNode = 1,
    ProcessNode = 2,
    OutputNode = 3
}
export interface BaseNode {
    id: string;
    cx: number;
    cy: number;
    fill: string;
    fontSize: number;
    fontColor: string;
    fontWeight: string;
    dx: number;
    label: string;
    labelPosition: string;
    opacity: number;
    renderLabel: boolean;
    size: number;
    stroke: string;
    strokeWidth: number;
    svg: string;
    type: string;
    viewGenerator: any;
    className: string;
    onClickNode: any;
    onRightClickNode: any;
    onMouseOverNode: any;
    onMouseOutNode: any;
    typeNode: TypeNode;
    description: string;
    inputNodes: BaseNode[];
    value: number;
    evaluator(): void;
}
export declare class DefaultNode implements BaseNode {
    id: string;
    cx: number;
    cy: number;
    fill: string;
    fontSize: number;
    fontColor: string;
    fontWeight: string;
    dx: number;
    label: string;
    labelPosition: string;
    opacity: number;
    renderLabel: boolean;
    size: number;
    stroke: string;
    strokeWidth: number;
    svg: string;
    type: string;
    viewGenerator: any;
    className: string;
    onClickNode: any;
    onRightClickNode: any;
    onMouseOverNode: any;
    onMouseOutNode: any;
    typeNode: TypeNode;
    description: string;
    inputNodes: BaseNode[];
    value: number;
    evaluator(): void;
}
export interface BaseLink {
    d: string;
    source: string;
    target: string;
    markerId: string;
    strokeWidth: number;
    stroke: string;
    strokeDasharray: string;
    strokeDashoffset: string;
    strokeLinecap: string;
    className: string;
    opacity: number;
    mouseCursor: string;
    onClickLink: any;
    onRightClickLink: any;
    onMouseOverLink: any;
    onMouseOutLink: any;
}
export declare class DefaultBaseLink implements BaseLink {
    d: string;
    source: string;
    target: string;
    markerId: string;
    strokeWidth: number;
    stroke: string;
    strokeDasharray: string;
    strokeDashoffset: string;
    strokeLinecap: string;
    className: string;
    opacity: number;
    mouseCursor: string;
    onClickLink: any;
    onRightClickLink: any;
    onMouseOverLink: any;
    onMouseOutLink: any;
}
export interface BaseGraph {
    config: Object;
    nodes: BaseNode[];
    links: BaseLink[];
    updateNodes(newnodes: BaseNode[]): void;
    updateLinks(newlinks: BaseLink[]): void;
    updateConfig(newconfig: Object): void;
}
export declare class VBaseGraph implements BaseGraph {
    config: Object;
    nodes: BaseNode[];
    links: BaseLink[];
    constructor(nodesin: BaseNode[], links: BaseLink[], config: Object);
    updateNodes(newnodes: BaseNode[]): void;
    updateLinks(newlinks: BaseLink[]): void;
    updateConfig(newconfig: Object): void;
}
