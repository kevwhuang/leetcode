// 199 - Binary Tree Right Side View

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function rightSideView(root) {
    if (!root) return [];
    const res = [];
    let Q = [root];
    while (Q.length) {
        res.push(Q.at(-1).val);
        const QQ = [];
        for (let i = 0; i < Q.length; i++) {
            if (Q[i].left) QQ.push(Q[i].left);
            if (Q[i].right) QQ.push(Q[i].right);
        }
        Q = QQ;
    }
    return res;
}

module.exports = rightSideView;
