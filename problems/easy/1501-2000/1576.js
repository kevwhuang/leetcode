// 1576 - Replace All ?'s to Avoid Consecutive Repeating Characters

function modifyString(s) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '?') continue;
        let code = (s[i - 1]?.charCodeAt(0) || 97) + 1;
        if (code >= 122) code = 97;
        let letter = String.fromCharCode(code);
        if (letter === s[i + 1]) letter = String.fromCharCode(code + 1);
        s[i] = letter;
    }
    return s.join('');
}
