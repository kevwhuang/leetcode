// 1544 - Make the String Great

function makeGood(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        const delta = (97 <= code && code <= 122) ? -32 : 32;
        String.fromCharCode(code + delta) === stack.at(-1)
            ? stack.pop()
            : stack.push(s[i]);
    }
    return stack.join('');
}
