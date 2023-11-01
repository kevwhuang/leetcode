const buildTree = require('../../neetcode/trees/construct-binary-tree-from-preorder-and-inorder-traversal');

describe('Main', () => {
    test('Case 1', () => {
        const results = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
        expect(results.val).toStrictEqual(3);
        expect(results.left.val).toStrictEqual(9);
        expect(results.right.val).toStrictEqual(20);
        expect(results.right.left.val).toStrictEqual(15);
        expect(results.right.right.val).toStrictEqual(7);
    });

    test('Case 2', () => {
        expect(buildTree([-1], [-1]).val).toStrictEqual(-1);
    });
});
