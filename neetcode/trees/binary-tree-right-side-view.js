// 199 - Binary Tree Right Side View

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function rightSideView(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        let node;
        for (let i = 0, len = queue.length; i < len; i++) {
            node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(node.val);
    }
    return res;
}

module.exports = rightSideView;
