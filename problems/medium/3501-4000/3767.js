// 3767 - Maximize Points After Choosing K Tasks

function maxPoints(technique1, technique2, k) {
    const A1 = technique1, A2 = technique2, n = A1.length;
    const ind = Array.from({ length: n }, (_, i) => i);
    ind.sort((a, b) => A1[b] + A2[a] - A1[a] - A2[b]);
    let res = 0, i = 0;
    while (i < k) res += A1[ind[i++]];
    while (i < n) res += Math.max(A1[ind[i]], A2[ind[i++]]);
    return res;
}
