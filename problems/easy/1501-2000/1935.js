// 1935 - Maximum Number of Words You Can Type

function canBeTypedWords(text, brokenLetters) {
    text = text.split(' ');
    brokenLetters = new Set(brokenLetters);
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        let j = 0;
        while (j < text[i].length && !brokenLetters.has(text[i][j])) j++;
        if (j === text[i].length) count++;
    }
    return count;
}
