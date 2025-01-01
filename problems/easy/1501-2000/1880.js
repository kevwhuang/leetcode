// 1880 - Check If Word Equals Summation of Two Words

function isSumEqual(firstWord, secondWord, targetWord) {
    function check(word) {
        let str = '';
        for (let i = 0; i < word.length; i++) {
            str += word.charCodeAt(i) - 97;
        }
        return parseInt(str);
    }
    return check(firstWord) + check(secondWord) === check(targetWord);
}
