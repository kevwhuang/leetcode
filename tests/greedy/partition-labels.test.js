const partitionLabels = require('../../neetcode/greedy/partition-labels');

describe('Main', () => {
    test('Case 1', () => {
        expect(partitionLabels('ababcbacadefegdehijhklij')).toStrictEqual([9, 7, 8]);
    });
    test('Case 2', () => {
        expect(partitionLabels('eccbbbbdec')).toStrictEqual([10]);
    });
});
