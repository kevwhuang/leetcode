const invertTree = require('../../neetcode/trees/invert-binary-tree');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const root = new TreeNode(4);
        root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        root.right = new TreeNode(7, new TreeNode(6), new TreeNode(9));
        const solution = new TreeNode(4);
        solution.left = new TreeNode(7, new TreeNode(9), new TreeNode(6));
        solution.right = new TreeNode(2, new TreeNode(3), new TreeNode(1));
        expect(invertTree(root)).toStrictEqual(solution);
    });
    test('Case 2', () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        const solution = new TreeNode(2, new TreeNode(3), new TreeNode(1));
        expect(invertTree(root)).toStrictEqual(solution);
    });
    test('Case 3', () => {
        expect(invertTree(new TreeNode())).toStrictEqual(new TreeNode());
    });
});
