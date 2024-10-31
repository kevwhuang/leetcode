// 17 - Letter Combinations of a Phone Number

function letterCombinations(digits) {
    function backtrack(i, cur) {
        if (i === digits.length) return res.push(cur);
        const str = dict[digits[i] - 2];
        for (let j = 0; j < str.length; j++) {
            backtrack(i + 1, cur + str[j]);
        }
    }
    if (digits.length === 0) return [];
    const res = [];
    const dict = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    backtrack(0, '');
    return res;
}
