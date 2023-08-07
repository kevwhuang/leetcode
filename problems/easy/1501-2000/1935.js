// 1935 - Maximum Number of Words You Can Type

function canBeTypedWords(text, brokenLetters) {
    text = text.split(' ');
    brokenLetters = new Set([...brokenLetters]);
    let count = 0;
    outer: for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text[i].length; j++) {
            if (brokenLetters.has(text[i][j])) continue outer;
        }
        count++;
    }
    return count;
}
