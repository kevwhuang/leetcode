// 1614 - Maximum Nesting Depth of the Parentheses

function maxDepth(s) {
    let depth = 0,
        maxDepth = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') maxDepth = Math.max(++depth, maxDepth);
        else if (s[i] === ')') depth--;
    }
    return maxDepth;
}
