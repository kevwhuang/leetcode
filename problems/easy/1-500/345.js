// 345 - Reverse Vowels of a String

function reverseVowels(s) {
    s = s.split('');
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    let left = -1;
    let right = s.length;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        while (!vowels.has(s[++left]) && left < s.length) { }
        while (!vowels.has(s[--right]) && right > 0) { }
    }
    return s.join('');
}