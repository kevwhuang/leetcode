// 1768 - Merge Strings Alternately

function mergeAlternately(word1, word2) {
    const length = word1.length + word2.length;
    let merged = '',
        pointer1 = 0,
        pointer2 = 0;
    while (pointer1 + pointer2 < length) {
        if (pointer1 < word1.length) merged += word1[pointer1++];
        if (pointer2 < word2.length) merged += word2[pointer2++];
    }
    return merged;
}
