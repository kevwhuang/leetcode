// 2062 - Count Vowel Substrings of a String

function countVowelSubstrings(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let substrings = 0;
    for (let i = 0, cur = new Set(); i < word.length - 4; i++) {
        cur.clear();
        for (let j = i; j < word.length; j++) {
            if (!vowels.has(word[j])) break;
            cur.add(word[j]);
            cur.size === 5 && substrings++;
        }
    }
    return substrings;
}
