// 1961 - Check If String Is a Prefix of Array

function isPrefixString(s, words) {
    let pos = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (s[pos++] !== words[i][j]) return false;
        }
        if (pos === s.length) return true;
        if (pos > s.length) return false;
    }
    return pos === s.length;
}
