const goodNodes = require('../../neetcode/trees/count-good-nodes-in-binary-tree');

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
        root.left = new TreeNode(1, new TreeNode(3));
        root.right = new TreeNode(4, new TreeNode(1), new TreeNode(5));
        expect(goodNodes(root)).toStrictEqual(4);
    });
    test('Case 2', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(3, new TreeNode(4), new TreeNode(2));
        expect(goodNodes(root)).toStrictEqual(3);
    });
    test('Case 3', () => {
        expect(goodNodes(new TreeNode(1))).toStrictEqual(1);
    });
});
