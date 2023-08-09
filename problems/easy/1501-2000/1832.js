// 1832 - Check If the Sentence Is Pangram

function checkIfPangram(sentence) {
    const letters = new Set();
    for (let i = 0; i < sentence.length; i++) {
        letters.add(sentence[i]);
    }
    return letters.size === 26;
}
