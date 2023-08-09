// 100 - Same Tree

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function isSameTree(p, q) {
    return JSON.stringify(p) === JSON.stringify(q);
}

module.exports = isSameTree;
