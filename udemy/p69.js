// 69 - Graphs - addVertex Exercise

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(v) {
        this.adjacencyList[v] = [];
    }
}
