// 125 - Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
    s = s.replaceAll(/[\W_]/g, '').toLowerCase();
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (s[left++] !== s[right--]) return false;
    }
    return true;
}

module.exports = isPalindrome;
