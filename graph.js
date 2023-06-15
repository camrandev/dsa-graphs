/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    //create a new node instance

    //add it to this.nodes
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    //loop over the adjacent list for vertex
    for (let neighbor of vertex.adjacent) {
      neighbor.adjacent.delete(vertex);
    }
    //for each node in the list, call remove edge

    //delete vertex from this.nodes
    this.nodes.delete(vertex);
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    // set a starting place
    // seen=new set() s u p x
    // make a stack as set with start included
    //stack = , p, x, q

    // while stack
    // delete(start) from stack
    // add start to seen
    // add start.adjacent to stack
    // if seen has adjacent val don't add
    // start = stack[set.length-1]
    //
    // end loop, return seen

    let curr = start;
    let seen = new Set();
    let stack = [start];

    while (stack.length > 0) {
      stack.pop(curr);
      seen.add(curr.value);
      // add neighbors to stack
      if (curr.adjacent.size > 0) {
        curr.adjacent.forEach((v) => {
          if (!seen.has(v.value) && !stack.includes(v)) stack.push(v);
        });
      }
      curr = stack[stack.length-1];
    }
    return [...seen];
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let curr = start;
    let seen = new Set();
    let stack = [start];

    while (stack.length > 0) {
      stack.shift(curr);
      seen.add(curr.value);
      // add neighbors to stack
      if (curr.adjacent.size > 0) {
        curr.adjacent.forEach((v) => {
          if (!seen.has(v.value) && !stack.includes(v)) stack.push(v);
        });
      }
      curr = stack[0];
    }
    return [...seen];
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end, calls={}, seen = new Set([start])) {
// how do we know when we're done searching?
    // compare steps to this.nodes.size


if (start === end) return 0 //set seen to everything except first value


for (let node of start.adjacent) {
  if (!seen.has(node)) {
    seen.add(node)

  }
}


// return Math.min(
//   this.left.minDepthToIncompleteNode(),
//   this.right.minDepthToIncompleteNode()
// ) + 1


  }
}

let graph = new Graph();
let S = new Node("S");
let P = new Node("P");
let U = new Node("U");
let X = new Node("X");
let Q = new Node("Q");
let Y = new Node("Y");
let V = new Node("V");
let R = new Node("R");
let W = new Node("W");
let T = new Node("T");

graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);

let result = graph.depthFirstSearch(T); //S, P, U, X, Q, Y, V, R, W, T in some order

module.exports = { Graph, Node };
