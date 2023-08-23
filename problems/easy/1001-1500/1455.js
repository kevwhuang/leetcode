// 1455 - Check If a Word Occurs as a Prefix of Any Word in a Sentence

function isPrefixOfWord(sentence, searchWord) {
    for (let i = 0, pos = 1; i < sentence.length; pos++) {
        if (sentence.startsWith(searchWord, i)) return pos;
        const next = sentence.indexOf(' ', i);
        if (next === -1) break;
        i = next + 1;
    }
    return -1;
}
