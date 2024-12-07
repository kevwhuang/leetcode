// 102 - Binary Tree Level Order Traversal

function levelOrder(root) {
    if (!root) return [];
    const res = [];
    let Q = [root];
    while (Q.length) {
        const arr = new Int16Array(Q.length), QQ = [];
        for (let i = 0; i < Q.length; i++) {
            const node = Q[i];
            arr[i] = node.val;
            if (node.left) QQ.push(node.left);
            if (node.right) QQ.push(node.right);
        }
        res.push(arr);
        Q = QQ;
    }
    return res;
}
