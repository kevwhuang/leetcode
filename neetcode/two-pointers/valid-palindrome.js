// 125 - Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
    s = s.replace(/[\W_]/g, '').toLowerCase();
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l++] !== s[r--]) return false;
    }
    return true;
}

module.exports = isPalindrome;
