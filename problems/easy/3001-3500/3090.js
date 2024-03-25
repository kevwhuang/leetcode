// 3090 - Maximum Length Substring With Two Occurrences

function maximumLengthSubstring(s) {
    let max = 2;
    for (let i = 0; i < s.length; i++) {
        const bucket = new Array(26).fill(0);
        let j = i;
        while (j < s.length) {
            if (++bucket[s.charCodeAt(j) - 97] === 3) break;
            j++;
        }
        max = Math.max(j - i, max);
    }
    return max;
}
