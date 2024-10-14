// 668 - Kth Smallest Number in Multiplication Table

function findKthNumber(m, n, k) {
    let l = 1, r = m * n;
    while (l <= r) {
        const mid = l + r >> 1;
        let count = 0, row = 0;
        while (++row <= m) count += Math.min(n, mid / row >> 0);
        if (count < k) l = mid + 1;
        else r = mid - 1;
    }
    return l;
}
