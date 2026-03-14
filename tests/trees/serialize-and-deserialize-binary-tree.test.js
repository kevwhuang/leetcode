const { serialize, deserialize } = require('../../neetcode/trees/serialize-and-deserialize-binary-tree');

describe('Main', () => {
    test('Case 1', () => {
        const solution = [1, 2, 3, null, null, 4, 5];
        expect(deserialize(serialize([1, 2, 3, null, null, 4, 5]))).toStrictEqual(solution);
    });
    test('Case 2', () => {
        expect(deserialize(serialize([]))).toStrictEqual([]);
    });
});
