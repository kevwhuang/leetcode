// 70 - Graphs - removeEdge Exercise

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    addVertex(v) {
        this.adjacencyList[v] = [];
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
}
