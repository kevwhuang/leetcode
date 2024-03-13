// 20 - Valid Parentheses

function isValid(s) {
    const stack = [];
    const obj = { ')': '(', ']': '[', '}': '{' };
    for (let i = 0; i < s.length; i++) {
        if (s[i] in obj) {
            if (obj[s[i]] === stack.at(-1)) stack.pop();
            else return false;
        } else {
            stack.push(s[i]);
        }
    }
    return !stack.length;
}
