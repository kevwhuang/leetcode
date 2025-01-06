// 3219 - Minimum Cost for Cutting Cake II

function minimumCost(m, n, horizontalCut, verticalCut) {
    m--, n--;
    let cost = 0, i = 0, j = 0;
    const M1 = horizontalCut.sort((a, b) => b - a);
    const M2 = verticalCut.sort((a, b) => b - a);
    while (i < m && j < n) {
        cost += M1[i] > M2[j] ? M1[i++] * (j + 1) : M2[j++] * (i + 1);
    }
    while (i < m) cost += M1[i++] * (j + 1);
    while (j < n) cost += M2[j++] * (i + 1);
    return cost;
}
