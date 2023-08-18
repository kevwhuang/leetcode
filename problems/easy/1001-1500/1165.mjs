// 1165 - Single-Row Keyboard

function calculateTime(keyboard, word) {
    const obj = {};
    for (let i = 0; i < 26; i++) {
        obj[keyboard[i]] = i;
    }
    let time = obj[word[0]];
    for (let i = 1; i < word.length; i++) {
        time += Math.abs(obj[word[i]] - obj[word[i - 1]]);
    }
    return time;
}
