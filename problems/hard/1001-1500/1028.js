// 1028 - Recover a Tree From Preorder Traversal

function recoverFromPreorder(traversal) {
    const A = [], S = traversal, n = S.length;
    for (let i = 0; i < n;) {
        let dep = 0, val = 0;
        while (S[i] === '-') dep++, i++;
        while (i < n && S[i] !== '-') val = +S[i++] + 10 * val;
        A[dep] = new TreeNode(val);
        if (dep--) A[dep][A[dep].left ? 'right' : 'left'] = A[dep + 1];
    }
    return A[0];
}
