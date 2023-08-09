// 2586 - Count the Number of Vowel Strings in Range

function vowelStrings(words, left, right) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let i = left; i <= right; i++) {
        vowels.has(words[i][0])
            && vowels.has(words[i].at(-1))
            && count++;
    }
    return count;
}
