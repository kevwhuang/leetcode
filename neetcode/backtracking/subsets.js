// 78 - Subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsets(nums) {
    function power(ite, cur, arr) {
        if (!ite.length) return arr.push(cur);
        power(ite.slice(1), cur, arr);
        power(ite.slice(1), cur.concat(ite[0]), arr);
    }
    const res = [];
    power(nums, [], res);
    return res;
}

module.exports = subsets;
