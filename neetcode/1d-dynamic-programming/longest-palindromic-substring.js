// 5 - Longest Palindromic Substring

/**
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
    function checkPalindromes(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
        if (r - l - 1 <= longest.length) return;
        longest = s.slice(l + 1, r);
    }
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        checkPalindromes(i, i);
        if (s[i] !== s[i + 1]) continue;
        checkPalindromes(i, i + 1);
    }
    return longest;
}

module.exports = longestPalindrome;
