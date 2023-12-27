// 2062 - Count Vowel Substrings of a String

function countVowelSubstrings(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let substrings = 0;
    for (let i = 0; i < word.length - 4; i++) {
        const set = new Set();
        for (let j = i; j < word.length; j++) {
            if (!vowels.has(word[j])) break;
            set.add(word[j]);
            if (set.size === 5) substrings++;
        }
    }
    return substrings;
}
