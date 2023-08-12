// 2047 - Number of Valid Words in a Sentence

function countValidWords(sentence) {
    function validate(token) {
        let hasHyphen = false;
        for (let i = 0; i < token.length; i++) {
            const code = token.charCodeAt(i);
            if (48 <= code && code <= 57) return false;
            if ((code === 33 || code === 44 || code === 46)
                && i !== token.length - 1) return false;
            if (code === 45) {
                if (hasHyphen) return false;
                hasHyphen = true;
                if (i === 0 || i === token.length - 1) return false;
                const left = token.charCodeAt(i - 1);
                if (left <= 96 || left >= 123) return false;
                const right = token.charCodeAt(i + 1);
                if (right <= 96 || right >= 123) return false;
            }
        }
        return true;
    }
    sentence = sentence.split(' ');
    let valid = 0;
    for (let i = 0; i < sentence.length; i++) {
        sentence[i].length && validate(sentence[i]) && valid++;
    }
    return valid;
}
