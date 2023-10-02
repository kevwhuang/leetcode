// 2785 - Sort Vowels in a String

function sortVowels(s) {
    s = s.split('');
    const dict = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    const vowels = [];
    for (let i = 0; i < s.length; i++) {
        dict.has(s[i]) && vowels.push(s[i]);
    }
    vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    for (let i = 0, j = 0; i < s.length; i++) {
        if (dict.has(s[i])) s[i] = vowels[j++];
    }
    return s.join('');
}
