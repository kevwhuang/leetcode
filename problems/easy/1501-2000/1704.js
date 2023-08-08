// 1704 - Determine if String Halves Are Alike

function halvesAreAlike(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    for (let i = 0, j = s.length / 2; i < s.length / 2; i++, j++) {
        vowels.has(s[i]) && count++;
        vowels.has(s[j]) && count--;
    }
    return !count;
}
