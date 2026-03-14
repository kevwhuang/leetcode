// 40 - Combination Sum II

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum2(candidates, target) {
    function backtrack(i, acc) {
        if (acc === target) res.push(new Uint8Array(cur));
        if (acc >= target) return;
        for (let j = i; j < candidates.length; j++) {
            if (j > i && candidates[j - 1] === candidates[j]) continue;
            cur.push(candidates[j]);
            backtrack(j + 1, acc + candidates[j]);
            cur.pop();
        }
    }
    candidates.sort((a, b) => a - b);
    const res = [], cur = [];
    backtrack(0, 0);
    return res;
}

module.exports = combinationSum2;
