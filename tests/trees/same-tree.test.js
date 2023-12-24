const isSameTree = require('../../neetcode/trees/same-tree');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const p = new TreeNode(1);
        p.left = new TreeNode(2);
        p.right = new TreeNode(3);
        const q = new TreeNode(1);
        q.left = new TreeNode(2);
        q.right = new TreeNode(3);
        expect(isSameTree(p, q)).toBeTruthy();
    });

    test('Case 2', () => {
        const p = new TreeNode(1);
        p.left = new TreeNode(2);
        const q = new TreeNode(1);
        q.right = new TreeNode(2);
        expect(isSameTree(p, q)).toBeFalsy();
    });

    test('Case 3', () => {
        const p = new TreeNode(1);
        p.left = new TreeNode(2);
        p.right = new TreeNode(1);
        const q = new TreeNode(1);
        q.left = new TreeNode(1);
        q.right = new TreeNode(2);
        expect(isSameTree(p, q)).toBeFalsy();
    });
});
