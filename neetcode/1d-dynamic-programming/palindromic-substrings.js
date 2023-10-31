// 647 - Palindromic Substrings

/**
 * @param {string} s
 * @return {number}
 */

function countSubstrings(s) {
    function countPalindromes(l, r) {
        let count = 0;
        while (l >= 0 && r < s.length) {
            if (s[l--] !== s[r++]) break;
            count++;
        }
        return count;
    }
    let substrings = 0;
    for (let i = 0; i < s.length; i++) {
        substrings += countPalindromes(i, i);
        substrings += countPalindromes(i, i + 1);
    }
    return substrings;
}

module.exports = countSubstrings;
