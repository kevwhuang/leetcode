// 22 - Generate Parentheses

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
