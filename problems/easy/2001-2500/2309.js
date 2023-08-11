// 2309 - Greatest English Letter in Upper and Lower Case

function greatestLetter(s) {
    const set = new Set();
    let greatest = '';
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        set.add(code);
        if (97 <= code && code <= 122) {
            const upper = String.fromCharCode(code - 32);
            set.has(code - 32) && upper > greatest && (greatest = upper);
        } else if (set.has(code + 32) && s[i] > greatest) {
            greatest = s[i];
        }
    }
    return greatest;
}
