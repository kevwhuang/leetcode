const maxDepth = require('../../neetcode/trees/maximum-depth-of-binary-tree');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        expect(maxDepth(new TreeNode(3, 9, new TreeNode(20, 15, 17)))).toStrictEqual(3);
    });

    test('Case 2', () => {
        expect(maxDepth(new TreeNode(1, null, 2))).toStrictEqual(2);
    });
});
