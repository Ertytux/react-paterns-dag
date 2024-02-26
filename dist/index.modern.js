import React__default, { useState, createElement } from 'react';
import { Graph } from 'react-d3-graph';

var TypeNode;
(function (TypeNode) {
  TypeNode[TypeNode["DefaultNode"] = 0] = "DefaultNode";
  TypeNode[TypeNode["InputNode"] = 1] = "InputNode";
  TypeNode[TypeNode["ProcessNode"] = 2] = "ProcessNode";
  TypeNode[TypeNode["OutputNode"] = 3] = "OutputNode";
})(TypeNode || (TypeNode = {}));
var DefaultNode = /*#__PURE__*/function () {
  function DefaultNode() {
    this.id = '';
    this.cx = 0;
    this.cy = 0;
    this.fill = 'green';
    this.fontSize = 8;
    this.fontColor = 'black';
    this.fontWeight = 'normal';
    this.dx = 0;
    this.label = '';
    this.labelPosition = '';
    this.opacity = 1;
    this.renderLabel = true;
    this.size = 200;
    this.stroke = 'none';
    this.strokeWidth = 1;
    this.svg = 'none';
    this.type = '';
    this.viewGenerator = null;
    this.className = 'DefaultNode';
    this.onClickNode = null;
    this.onRightClickNode = null;
    this.onMouseOverNode = null;
    this.onMouseOutNode = null;
    this.typeNode = TypeNode.DefaultNode;
    this.description = '';
    this.inputNodes = [];
    this.value = 0;
  }
  var _proto = DefaultNode.prototype;
  _proto.evaluator = function evaluator() {};
  return DefaultNode;
}();
var DefaultBaseLink = function DefaultBaseLink() {
  this.d = '';
  this.source = '';
  this.target = '';
  this.markerId = '';
  this.strokeWidth = 1.5;
  this.stroke = 'green';
  this.strokeDasharray = '5 1';
  this.strokeDashoffset = '3';
  this.strokeLinecap = 'round';
  this.className = 'link';
  this.opacity = 1;
  this.mouseCursor = 'pointer';
  this.onClickLink = null;
  this.onRightClickLink = null;
  this.onMouseOverLink = null;
  this.onMouseOutLink = null;
};
var VBaseGraph = /*#__PURE__*/function () {
  function VBaseGraph(nodesin, links, config) {
    this.config = config;
    this.nodes = nodesin;
    this.links = links;
  }
  var _proto2 = VBaseGraph.prototype;
  _proto2.updateNodes = function updateNodes(newnodes) {
    this.nodes = newnodes;
  };
  _proto2.updateLinks = function updateLinks(newlinks) {
    this.links = newlinks;
  };
  _proto2.updateConfig = function updateConfig(newconfig) {
    this.config = newconfig;
  };
  return VBaseGraph;
}();

var data = new VBaseGraph([], [], {});
var GraphUX = function GraphUX() {
  var _useState = useState([]),
    nodes = _useState[0],
    setNodes = _useState[1];
  var _useState2 = useState([]),
    links = _useState2[0],
    setLinks = _useState2[1];
  var _useState3 = useState([]),
    config = _useState3[0],
    setConfig = _useState3[1];
  var snode = new DefaultNode();
  setNodes([].concat(nodes, [snode]));
  var slink = new DefaultBaseLink();
  setLinks([].concat(links, [slink]));
  setConfig([config, {}]);
  return React__default.createElement(Graph, {
    id: 'graph-id',
    data: data,
    config: data.config
  });
};

var PaternDag = function PaternDag() {
  return createElement(GraphUX, null);
};

export { PaternDag };
//# sourceMappingURL=index.modern.js.map
