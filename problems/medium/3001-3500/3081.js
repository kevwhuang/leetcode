// 3081 - Replace Question Marks in String to Minimize Its Value

function minimizeStringValue(s) {
    const bucket = new Array(26).fill(0);
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] === '?') continue;
        bucket[s.charCodeAt(i) - 97]++;
    }
    const original = [...bucket];
    let count = bucket.reduce((s, e) => s + e);
    let target = 1;
    while (count < len) {
        for (let i = 0; i < 26; i++) {
            if (bucket[i] >= target) continue;
            bucket[i]++;
            if (++count === len) break;
        }
        target++;
    }
    for (let i = 0; i < 26; i++) {
        bucket[i] -= original[i];
    }
    s = s.split('');
    for (let i = 0, j = 0; i < len; i++) {
        if (s[i] !== '?') continue;
        while (bucket[j] === 0) j++;
        bucket[j]--;
        s[i] = String.fromCharCode(j + 97);
    }
    return s.join('');
}
