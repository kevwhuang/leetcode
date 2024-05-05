// 2554 - Maximum Number of Integers to Choose From a Range I

function maxCount(banned, n, maxSum) {
    const set = new Set();
    const limit = Math.min(n, maxSum);
    for (let i = 0; i < banned.length; i++) {
        if (banned[i] <= limit) set.add(banned[i]);
    }
    let count = 0, cur = 0;
    while (++cur <= n && cur <= maxSum) {
        if (set.has(cur)) continue;
        maxSum -= cur;
        count++;
    }
    return count;
}
