// 1768 - Merge Strings Alternately

function mergeAlternately(word1, word2) {
    let merged = '', i = 0, j = 0;
    const len = word1.length + word2.length;
    while (i + j < len) {
        if (i < word1.length) merged += word1[i++];
        if (j < word2.length) merged += word2[j++];
    }
    return merged;
}
