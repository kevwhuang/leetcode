// 2718 - Sum of Matrix After Queries

function matrixSumQueries(n, queries) {
    let sum = 0;
    const seen = [new Set(), new Set()];
    for (let i = queries.length - 1; i >= 0; i--) {
        const [type, index] = queries[i];
        if (seen[type].has(index)) continue;
        seen[type].add(index);
        sum += queries[i][2] * (n - seen[Math.abs(type - 1)].size);
    }
    return sum;
}
