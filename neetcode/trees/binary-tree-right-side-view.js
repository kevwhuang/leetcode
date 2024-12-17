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
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            if (Q[i].left) N.push(Q[i].left);
            if (Q[i].right) N.push(Q[i].right);
        }
        Q = N;
    }
    return res;
}

module.exports = rightSideView;
