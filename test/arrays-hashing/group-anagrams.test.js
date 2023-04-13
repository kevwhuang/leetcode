const groupAnagrams = require('../../algorithms/arrays-hashing/group-anagrams');

describe('Main', () => {
    test('Case 1', () => {
        for (const e of groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])) {
            switch (e.length) {
                case 1:
                    expect(e).toContain('bat');
                    break;
                case 2:
                    expect(e).toContain('nat')
                    expect(e).toContain('tan');
                    break;
                case 3:
                    expect(e).toContain('ate');
                    expect(e).toContain('eat');
                    expect(e).toContain('tea');
            }
        }
    });

    test('Case 2', () => {
        expect(groupAnagrams([''])).toStrictEqual([['']]);
    });

    test('Case 3', () => {
        expect(groupAnagrams(['a'])).toStrictEqual([['a']]);
    });
});
