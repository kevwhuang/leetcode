// 39 - Combination Sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum(candidates, target) {
    function backtrack(i, acc) {
        if (acc === target) res.push(new Uint8Array(cur));
        if (acc >= target || i === candidates.length) return;
        cur.push(candidates[i]);
        backtrack(i, acc + candidates[i]);
        cur.pop();
        backtrack(i + 1, acc);
    }
    const res = [], cur = [];
    backtrack(0, 0);
    return res;
}

module.exports = combinationSum;
