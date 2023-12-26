// 345 - Reverse Vowels of a String

function reverseVowels(s) {
    s = s.split('');
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    let l = -1, r = s.length;
    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        while (!vowels.has(s[++l]) && l < s.length) { }
        while (!vowels.has(s[--r]) && r > 0) { }
    }
    return s.join('');
}
