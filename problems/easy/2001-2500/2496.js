// 2496 - Maximum Value of a String in an Array

function maximumValue(strs) {
    let max = 0;
    for (let i = 0; i < strs.length; i++) {
        const s = strs[i];
        let isNum = true;
        for (let j = 0; j < s.length; j++) {
            const code = s.charCodeAt(j);
            if (code < 48 || code > 57) {
                isNum = false;
                break;
            }
        }
        if (isNum) max = Math.max(parseInt(s), max);
        else max = Math.max(s.length, max);
    }
    return max;
}
