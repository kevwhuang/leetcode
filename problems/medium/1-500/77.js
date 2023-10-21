// 77 - Combinations

function combine(n, k) {
    function backtrack(cur, start) {
        if (cur.length === k) return combos.push([...cur]);
        for (let i = start; i <= n; i++) {
            cur.push(i);
            backtrack(cur, i + 1);
            cur.pop();
        }
    }
    const combos = [];
    backtrack([], 1);
    return combos;
}
