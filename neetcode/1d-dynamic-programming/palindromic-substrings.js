// 647 - Palindromic Substrings

/**
 * @param {string} s
 * @return {number}
 */

function countSubstrings(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let l = i, r = i;
        while (~l && r < s.length && s[l--] === s[r++]) res++;
        l = i, r = i + 1;
        while (~l && r < s.length && s[l--] === s[r++]) res++;
    }
    return res;
}

module.exports = countSubstrings;
