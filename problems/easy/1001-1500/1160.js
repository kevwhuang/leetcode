// 1160 - Find Words That Can Be Formed by Characters

function countCharacters(words, chars) {
    function freqArr(str) {
        const arr = new Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            arr[str.charCodeAt(i) - 97]++;
        }
        return arr;
    }
    const charsFreq = freqArr(chars);
    let sum = 0;
    outer: for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > chars.length) continue;
        const wordFreq = freqArr(word);
        for (let j = 0; j < 26; j++) {
            if (wordFreq[j] > charsFreq[j]) continue outer;
        }
        sum += word.length;
    }
    return sum;
}
