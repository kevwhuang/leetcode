// 3136 - Valid Word

function isValid(word) {
    if (word.length < 3) return false;
    word = word.toLowerCase();
    const veto = new Set(['@', '#', '$']);
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let hasVowel = false, hasConsonant = false;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (veto.has(char)) return false;
        if (parseInt(char)) continue;
        if (vowels.has(char)) hasVowel = true;
        else hasConsonant = true;
    }
    return hasVowel && hasConsonant;
}
