

// Instantiate a new graph
var Graph = function() {
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node] === undefined) {
    return false;
  }
  return true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
  for ( var i = 0; i < this.edge.length; i++) {
    var currentEdge = this.edge[i];
    for (var j = 0; j < currentEdge.length; j++) {
      if (currentEdge[j] === node) {
        this.edge.splice(i, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  console.log(this.edge[0]);
  for (var i = 0; i < this.edge.length; i++) {
    if (JSON.stringify(this.edge[i]) === JSON.stringify([fromNode, toNode])) {
      return true;
    }
    if (JSON.stringify(this.edge[i]) === JSON.stringify([toNode, fromNode])) {
      return true;
    }
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edge.length; i++) {
    if (JSON.stringify(this.edge[i]) === JSON.stringify([fromNode, toNode])) {
      this.edge.splice(i, 1);
    }
    if (JSON.stringify(this.edge[i]) === JSON.stringify([toNode, fromNode])) {
      this.edge.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] === 'number') {
      cb(this[key]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


