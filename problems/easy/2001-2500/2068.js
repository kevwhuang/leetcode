// 2068 - Check Whether Two Strings are Almost Equivalent

function checkAlmostEquivalent(word1, word2) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        freq[word1.charCodeAt(i) - 97]++;
        freq[word2.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < 26; i++) {
        if (Math.abs(freq[i]) > 3) return false;
    }
    return true;
}
