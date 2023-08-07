// 591 - Tag Validator

function isValid(code) {
    const stack = [], len = code.length;
    let i = 0, tagged = false;
    while (i < len) {
        if (code[i] !== '<') {
            if (!tagged) return false;
            i++;
        } else if (i + 1 < len && code[i + 1] === '!') {
            const start = code.indexOf('[CDATA[', i + 2);
            if (start <= 2) return false;
            const end = code.indexOf(']]>', start + 7);
            if (end === -1 || end === len - 3) return false;
            i = end + 3;
        } else if (i + 1 < len && code[i + 1] === '/') {
            const end = code.indexOf('>', i + 2);
            if (end === -1) return false;
            if (end !== len - 1 && stack.length === 1) return false;
            if (code.slice(i + 2, end) !== stack.pop()) return false;
            i = end + 1;
        } else {
            const end = code.indexOf('>', i + 1);
            if (end === -1) return false;
            const tag = code.slice(i + 1, end);
            if (!/^[A-Z]{1,9}$/.test(tag)) return false;
            stack.push(tag);
            i = end + 1, tagged = true;
        }
    }
    return !stack.length;
}
