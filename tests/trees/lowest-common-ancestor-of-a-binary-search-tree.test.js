const lowestCommonAncestor = require('../../neetcode/trees/lowest-common-ancestor-of-a-binary-search-tree');

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const root = new TreeNode(6);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(0);
        root.left.right = new TreeNode(4);
        root.left.right.left = new TreeNode(3);
        root.left.right.right = new TreeNode(5);
        root.right = new TreeNode(8);
        root.right.left = new TreeNode(7);
        root.right.right = new TreeNode(9);
        expect(lowestCommonAncestor(root, root.left, root.right).val).toStrictEqual(6);
    });

    test('Case 2', () => {
        const root = new TreeNode(6);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(0);
        root.left.right = new TreeNode(4);
        root.left.right.left = new TreeNode(3);
        root.left.right.right = new TreeNode(5);
        root.right = new TreeNode(8);
        root.right.left = new TreeNode(7);
        root.right.right = new TreeNode(9);
        const q = root.left.right;
        expect(lowestCommonAncestor(root, root.left, q).val).toStrictEqual(2);
    });

    test('Case 3', () => {
        const root = new TreeNode(2);
        root.left = new TreeNode(1);
        expect(lowestCommonAncestor(root, root, root.left).val).toStrictEqual(2);
    });
});
