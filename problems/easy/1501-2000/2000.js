// 2000 - Reverse Prefix of Word

function reversePrefix(word, ch) {
    const index = word.indexOf(ch);
    if (index === -1) return word;
    let reversed = '';
    for (let i = index; i >= 0; i--) {
        reversed += word[i];
    }
    for (let i = index + 1; i < word.length; i++) {
        reversed += word[i];
    }
    return reversed;
}
