// 17 - Letter Combinations of a Phone Number

/**
 * @param {string} digits
 * @return {string[]}
 */

function letterCombinations(digits) {
    function backtrack(i, cur) {
        if (i === digits.length) return res.push(cur);
        const s = dict[digits[i] - 2];
        for (let j = 0; j < s.length; j++) {
            backtrack(i + 1, cur + s[j]);
        }
    }
    if (digits.length === 0) return [];
    const res = [];
    const dict = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    backtrack(0, '');
    return res;
}

module.exports = letterCombinations;
