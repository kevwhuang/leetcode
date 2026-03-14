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
        root.left = new TreeNode(2, new TreeNode(0));
        root.left.right = new TreeNode(4, new TreeNode(3), new TreeNode(5));
        root.right = new TreeNode(8, new TreeNode(7), new TreeNode(9));
        expect(lowestCommonAncestor(root, root.left, root.right).val).toStrictEqual(6);
    });
    test('Case 2', () => {
        const root = new TreeNode(6);
        root.left = new TreeNode(2, new TreeNode(0));
        root.left.right = new TreeNode(4, new TreeNode(3), new TreeNode(5));
        root.right = new TreeNode(8, new TreeNode(7), new TreeNode(9));
        expect(lowestCommonAncestor(root, root.left, root.left.right).val).toStrictEqual(2);
    });
    test('Case 3', () => {
        const root = new TreeNode(2, new TreeNode(1));
        expect(lowestCommonAncestor(root, root, root.left).val).toStrictEqual(2);
    });
});
