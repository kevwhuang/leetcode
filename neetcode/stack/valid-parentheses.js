// 20 - Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
    const S = [], dict = { ')': '(', ']': '[', '}': '{' };
    for (let i = 0; i < s.length; i++) {
        if (!dict[s[i]]) S.push(s[i]);
        else if (dict[s[i]] !== S.pop()) return false;
    }
    return S.length === 0;
}

module.exports = isValid;
