// 2559 - Count Vowel Strings in Ranges

function vowelStrings(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const lastIndex = word.length - 1;
        const isVowelString = vowels.has(word[0]) && vowels.has(word[lastIndex]);
        words[i] = isVowelString + (words[i - 1] ?? 0);
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = words[queries[i][1]] - (words[queries[i][0] - 1] ?? 0);
    }
    return queries;
}
