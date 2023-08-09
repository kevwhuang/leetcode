const isSameTree = require('../../neetcode/trees/same-tree');

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

describe('Main', () => {
    test('Case 1', () => {
        expect(isSameTree(new TreeNode([1, 2, 3]), new TreeNode([1, 2, 3]))).toBeTruthy();
    });

    test('Case 2', () => {
        expect(isSameTree(new TreeNode([1, 2]), new TreeNode([1, null, 2]))).toBeFalsy();
    });

    test('Case 3', () => {
        expect(isSameTree(new TreeNode([1, 2, 1]), new TreeNode([1, 1, 2]))).toBeFalsy();
    });
});
