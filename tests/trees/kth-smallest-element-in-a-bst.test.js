const kthSmallest = require('../../neetcode/trees/kth-smallest-element-in-a-bst');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(1, null, new TreeNode(2));
        root.right = new TreeNode(4);
        expect(kthSmallest(root, 1)).toStrictEqual(1);
    });
    test('Case 2', () => {
        const root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.left.left = new TreeNode(2, new TreeNode(1));
        root.left.right = new TreeNode(4);
        root.right = new TreeNode(6);
        expect(kthSmallest(root, 3)).toStrictEqual(3);
    });
});
