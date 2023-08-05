// 1370 - Increasing Decreasing String

function sortString(s) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }
    let result = '';
    while (true) {
        for (let i = 0; i < 26; i++) {
            if (freq[i]) {
                result += String.fromCharCode(i + 97);
                freq[i]--;
            }
            if (result.length === s.length) return result;
        }
        for (let i = 25; i >= 0; i--) {
            if (freq[i]) {
                result += String.fromCharCode(i + 97);
                freq[i]--;
            }
            if (result.length === s.length) return result;
        }
    }
}
