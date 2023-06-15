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
let stack = new Set([start]);
console.log("stack====", stack)

while (stack.length) {
  stack.delete(curr);
  seen.add(curr);

  // add neighbors to stack
  curr.adjacent.forEach(v => {
    if (!seen.has(v)) stack.add(v)
  })

  curr = stack[stack.length-1]
}
console.log("seen ====", seen)
return seen
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {}

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {}
}

module.exports = { Graph, Node };
