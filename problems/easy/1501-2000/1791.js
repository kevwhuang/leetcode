// 1791 - Find Center of Star Graph

function findCenter(edges) {
    const M = edges;
    return M[0][0] === M[1][0] || M[0][0] === M[1][1] ? M[0][0] : M[0][1];
}
