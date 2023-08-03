// 500 - Keyboard Row

function findWords(words) {
    const output = [];
    const keyboard = [
        'qwertyuiopQWERTYUIOP',
        'asdfghjklASDFGHJKL',
        'zxcvbnmZXCVBNM',
    ];
    outer: for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let letters = keyboard[0];
        if (keyboard[1].includes(word[0])) {
            letters = keyboard[1];
        } else if (keyboard[2].includes(word[0])) {
            letters = keyboard[2];
        }
        for (let j = 1; j < word.length; j++) {
            if (!letters.includes(word[j])) continue outer;
        }
        output.push(words[i]);
    }
    return output;
}
