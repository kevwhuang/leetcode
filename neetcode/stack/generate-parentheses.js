// 22 - Generate Parentheses

/**
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(n) {
    function backtrack(str, open, closed) {
        if (str.length === n * 2) return res.push(str);
        if (open < n) backtrack(str + '(', open + 1, closed);
        if (closed < open) backtrack(str + ')', open, closed + 1);
    }
    const res = [];
    backtrack('', 0, 0);
    return res;
}

module.exports = generateParenthesis;
