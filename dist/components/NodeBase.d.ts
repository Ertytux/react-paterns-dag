export declare enum TypeNode {
    DefaultNode = 0,
    InputNode = 1,
    ProcessNode = 2,
    OutputNode = 3
}
export interface BaseNode {
    id: string;
    label: string;
    typeNode: TypeNode;
    description: string;
    inputNodes: BaseNode[];
    value: number;
    evaluator(): void;
}
export declare class DefaultNode implements BaseNode {
    id: string;
    label: string;
    typeNode: TypeNode;
    description: string;
    inputNodes: BaseNode[];
    value: number;
    evaluator(): void;
    get getValue(): number;
}
export interface BaseLink {
    source: string;
    target: string;
    weight: number;
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
