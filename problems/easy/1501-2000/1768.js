// 1768 - Merge Strings Alternately

function mergeAlternately(word1, word2) {
    let res = '', i = 0, j = 0;
    const n = word1.length + word2.length;
    while (i + j < n) {
        if (i < word1.length) res += word1[i++];
        if (j < word2.length) res += word2[j++];
    }
    return res;
}
