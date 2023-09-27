// 199 - Binary Tree Right Side View

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function rightSideView(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    let len, node;
    while (queue.length) {
        len = queue.length;
        for (let i = 0; i < len; i++) {
            node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(node.val);
    }
    return res;
}

module.exports = rightSideView;
