// 133 - Clone Graph

/**
 * @param {Node} node
 * @return {Node}
 */

function cloneGraph(node) {
    function dfs(node) {
        const cur = node.val;
        if (!arr[cur]) {
            arr[cur] = new Node(cur);
            arr[cur].neighbors = node.neighbors.map(dfs);
        }
        return arr[cur];
    }
    if (!node) return null;
    const arr = new Array(100);
    return dfs(node);
}

class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

module.exports = cloneGraph;
