// 39 - Combination Sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum(candidates, target) {
    function backtrack(i, cur, sum) {
        if (sum === target) return combos.push([...cur]);
        if (sum > target || i === candidates.length) return;
        cur.push(candidates[i]);
        backtrack(i, cur, sum + candidates[i]);
        cur.pop();
        backtrack(i + 1, cur, sum);
    }
    const combos = [];
    backtrack(0, [], 0);
    return combos;
}

module.exports = combinationSum;
