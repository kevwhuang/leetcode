// 408 - Valid Word Abbreviation

function validWordAbbreviation(word, abbr) {
    let i = 0, j = 0, str;
    while (j < abbr.length) {
        if (isNaN(abbr[j])) {
            if (word[i++] !== abbr[j++]) return false;
        } else {
            if (abbr[j] === '0') return false;
            str = '';
            while (!isNaN(abbr[j])) str += abbr[j++];
            i += Number(str);
        }
    }
    return i === word.length;
}
