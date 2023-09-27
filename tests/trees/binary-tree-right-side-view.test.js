const rightSideView = require('../../neetcode/trees/binary-tree-right-side-view');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2, null, new TreeNode(5));
        root.right = new TreeNode(3, null, new TreeNode(4));
        expect(rightSideView(root)).toStrictEqual([1, 3, 4]);
    });

    test('Case 2', () => {
        expect(rightSideView(new TreeNode(1, null, new TreeNode(3)))).toStrictEqual([1, 3]);
    });

    test('Case 3', () => {
        expect(rightSideView()).toStrictEqual([]);
    });
});
