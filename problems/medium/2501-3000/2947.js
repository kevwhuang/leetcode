// 2947 - Count Beautiful Substrings I

function beautifulSubstrings(s, k) {
    const len = s.length;
    const prefixSum = new Array(len);
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < s.length; i++) {
        prefixSum[i] = prefixSum[i - 1] ?? 0;
        if (set.has(s.charAt(i))) prefixSum[i]++;
    }
    let substrings = 0;
    for (let i = 0; i < len; i++) {
        const pre = prefixSum[i - 1] ?? 0;
        for (let j = i; j < len; j++) {
            const strLen = j - i + 1;
            if (strLen % 2) continue;
            const vowels = prefixSum[j] - pre;
            const consonants = strLen - vowels;
            if (vowels !== consonants) continue;
            if (vowels * consonants % k === 0) substrings++;
        }
    }
    return substrings;
}
