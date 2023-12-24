// 2924 - Find Champion II

function findChampion(n, edges) {
    const indegree = new Array(n).fill(0);
    for (let i = 0; i < edges.length; i++) {
        indegree[edges[i][1]]++;
    }
    let champion = null;
    for (let i = 0; i < n; i++) {
        if (indegree[i]) continue;
        if (champion === null) champion = i;
        else return -1;
    }
    return champion;
}
