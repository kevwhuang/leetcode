// 1844 - Replace All Digits With Characters

function replaceDigits(s) {
    if (s.length === 1) return s;
    let output = '';
    for (let i = 0; i < s.length - 1; i += 2) {
        output += s[i] + String.fromCharCode(s.charCodeAt(i) + +s[i + 1]);
    }
    if (s.length % 2) output += s.at(-1);
    return output;
}
