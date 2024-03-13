// 40 - Combination Sum II

function combinationSum2(candidates, target) {
    function backtrack(i, cur, sum) {
        if (sum === target) combos.push([...cur]);
        if (sum >= target) return;
        for (let j = i, prev; j < candidates.length; j++) {
            if (candidates[j] === prev) continue;
            prev = candidates[j];
            cur.push(candidates[j]);
            backtrack(j + 1, cur, sum + candidates[j]);
            cur.pop();
        }
    }
    candidates.sort((a, b) => a - b);
    const combos = [];
    backtrack(0, [], 0);
    return combos;
}
