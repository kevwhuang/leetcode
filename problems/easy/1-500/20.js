// 20 - Valid Parentheses

function isValid(s) {
    const stack = [];
    const dict = { ')': '(', ']': '[', '}': '{' };
    for (let i = 0; i < s.length; i++) {
        if (!dict[s[i]]) stack.push(s[i]);
        else if (dict[s[i]] !== stack.pop()) return false;
    }
    return stack.length === 0;
}
