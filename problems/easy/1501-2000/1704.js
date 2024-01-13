// 1704 - Determine If String Halves Are Alike

function halvesAreAlike(s) {
    let count = 0;
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    const bound = s.length / 2;
    for (let i = 0, j = bound; i < bound; i++, j++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[j])) count--;
    }
    return count === 0;
}
