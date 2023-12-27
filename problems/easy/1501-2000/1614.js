// 1614 - Maximum Nesting Depth of the Parentheses

function maxDepth(s) {
    let maxDepth = 0, depth = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') maxDepth = Math.max(++depth, maxDepth);
        else if (s[i] === ')') depth--;
    }
    return maxDepth;
}
