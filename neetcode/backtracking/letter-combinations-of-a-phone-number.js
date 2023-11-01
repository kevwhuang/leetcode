// 17 - Letter Combinations of a Phone Number

/**
 * @param {string} digits
 * @return {string[]}
 */

function letterCombinations(digits) {
    function backtrack(str, i) {
        if (i === digits.length) return combos.push(str);
        const letters = arr[digits[i]];
        for (let j = 0; j < letters.length; j++) {
            backtrack(str + letters[j], i + 1);
        }
    }
    if (digits.length === 0) return [];
    const arr = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const combos = [];
    backtrack('', 0);
    return combos;
}

module.exports = letterCombinations;
