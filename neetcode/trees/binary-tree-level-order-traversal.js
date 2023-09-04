// 102 - Binary Tree Level Order Traversal

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function levelOrder(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    let len, level;
    while (queue.length) {
        len = queue.length;
        level = new Array(len);
        for (let i = 0, cur; i < len; i++) {
            cur = queue.shift();
            level[i] = cur.val;
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        res.push(level);
    }
    return res;
}

module.exports = levelOrder;
