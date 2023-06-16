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
    // make a stack with start included
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
  distanceOfShortestPath(start, end,  seen = new Set([start])) {
    

// if (start === end) { 
//   for (let val of seen){
//    if (seen.size() === 1) return;
//     seen.delete(val)
//   }
//   return 1} //set seen to everything except first value

// for (let node of start.adjacent) { // 
//   debugger
//   if (!seen.has(node)) {

//     seen.add(node)
    
//     return Math.min(

//       this.distanceOfShortestPath(node, end, calls, seen)
//       // node.adjacent.forEach(v => this.distanceOfShortestPath(v, end, calls, seen))+1)
//     ) + 1
//   }
// }
//   }

// // return Math.min(
// //   this.left.minDepthToIncompleteNode(),
// //   this.right.minDepthToIncompleteNode()
// // ) + 1


//   }


////////////////////////////////


let calls = []

function _distanceOfShortestPath(start, end){
let count = 1

    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
  
    while (toVisitStack.length > 0) {
      let currPerson = toVisitStack.pop();
      if (currPerson === end) return count;
      count += 1
  
      for (let neighbor of currPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
  }

for (let node of start.adjacent){
  calls.push(_distanceOfShortestPath(node, end))
}

console.log("cals calls calls", calls)
if (calls.includes(undefined)){
  return undefined
}else{
return Math.min(...calls)
  }}

}

let graph = new Graph();

    let r = new Node("R");
    let i = new Node("I");
    let t = new Node("T");
    let h = new Node("H");
    let m = new Node("M");

    graph.addVertices([r, i, t, h, m])
    graph.addEdge(r, i);
    graph.addEdge(r, t);
    graph.addEdge(r, h);
    graph.addEdge(i, t);
    graph.addEdge(t, h);
    graph.addEdge(h, m);
    graph.distanceOfShortestPath(r, m)
module.exports = { Graph, Node };
