// 1880 - Check if Word Equals Summation of Two Words

function isSumEqual(firstWord, secondWord, targetWord) {
    function nv(word) {
        let str = '';
        for (let i = 0; i < word.length; i++) {
            str += word.charCodeAt(i) - 97;
        }
        return parseInt(str);
    }
    return nv(firstWord) + nv(secondWord) === nv(targetWord);
}
