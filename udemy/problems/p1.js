// 1 - Frequency Counter - validAnagram

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < str1.length; i++) {
        freqs[str1.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < str2.length; i++) {
        freqs[str2.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (freqs[i] !== 0) return false;
    }
    return true;
}
