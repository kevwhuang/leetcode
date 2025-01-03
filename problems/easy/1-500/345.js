// 345 - Reverse Vowels of a String

function reverseVowels(s) {
    s = s.split('');
    const set = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    let l = 0, r = s.length - 1;
    while (l < r) {
        while (l < r && !set.has(s[l])) l++;
        if (l === r) break;
        while (l < r && !set.has(s[r])) r--;
        if (l === r) break;
        const swap = s[l];
        s[l++] = s[r], s[r--] = swap;
    }
    return s.join('');
}
