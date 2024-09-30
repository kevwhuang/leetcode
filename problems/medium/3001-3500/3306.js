// 3306 - Count of Substrings Containing Every Vowel and K Consonants II

function countOfSubstrings(word, k) {
    const next = new Uint32Array(word.length);
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = word.length - 1, prev = word.length; ~i; i--) {
        next[i] = prev;
        if (!vowels.has(word[i])) prev = i;
    }
    let substrings = 0, count = 0;
    const map = new Map();
    for (let l = -1, r = 0; r < word.length; r++) {
        if (!vowels.has(word[r])) count++;
        else map.set(word[r], (map.get(word[r]) ?? 0) + 1);
        while (count >= k && map.size === 5 && ~++l) {
            if (count === k) substrings += next[r] - r;
            const f = map.get(word[l]);
            if (f > 1) map.set(word[l], f - 1);
            else if (f) map.delete(word[l]);
            else count--;
        }
    }
    return substrings;
}
