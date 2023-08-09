// 1078 - Occurrences After Bigram

function findOcurrences(text, first, second) {
    const words = [];
    text = text.split(' ');
    for (let i = 0; i < text.length - 2; i++) {
        text[i] === first && text[i + 1] === second && words.push(text[i + 2]);
    }
    return words;
}
