// 1689 - Partitioning Into Minimum Number of Deci-Binary Numbers

function minPartitions(n) {
    let min = 0;
    for (let i = 0; i < n.length; i++) {
        min = Math.max(n[i], min);
    }
    return min;
}
