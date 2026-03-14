const isValidBST = require('../../neetcode/trees/validate-binary-search-tree');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(isValidBST(root)).toBeTruthy();
    });
    test('Case 2', () => {
        const root = new TreeNode(5, new TreeNode(1));
        root.right = new TreeNode(4, new TreeNode(3), new TreeNode(6));
        expect(isValidBST(root)).toBeFalsy();
    });
});
