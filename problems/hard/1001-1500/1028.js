// 1028 - Recover a Tree From Preorder Traversal

function recoverFromPreorder(traversal) {
    const res = [], s = traversal, n = s.length;
    let i = 0;
    while (i < n) {
        let acc = 0, val = 0;
        while (s[i] === '-') acc++, i++;
        while (i < n && s[i] !== '-') val = +s[i++] + 10 * val;
        res[acc] = new TreeNode(val);
        if (acc--) res[acc][res[acc].left ? 'right' : 'left'] = res[acc + 1];
    }
    return res[0];
}
