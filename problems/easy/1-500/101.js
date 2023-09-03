// 101 - Symmetric Tree

function isSymmetric(root) {
    function check(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2 || t1.val !== t2.val) return false;
        return check(t1.left, t2.right) && check(t1.right, t2.left);
    }
    return check(root.left, root.right);
}
