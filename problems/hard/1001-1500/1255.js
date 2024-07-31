// 1255 - Maximum Score Words Formed by Letters

function maxScoreWords(words, letters, score) {
    function backtrack(i) {
        if (i === words.length) return max = Math.max(acc, max);
        backtrack(i + 1);
        for (let j = i; j < words.length; j++) {
            const word = words[j];
            let flag = true;
            for (let k = 0; k < 26; k++) {
                if (word[k] <= bucket[k]) continue;
                flag = false;
                break;
            }
            if (flag === false) continue;
            for (let k = 0; k < 26; k++) {
                acc += word[k] * score[k];
                bucket[k] -= word[k];
            }
            cur.push(word);
            backtrack(j + 1);
            cur.pop();
            for (let k = 0; k < 26; k++) {
                acc -= word[k] * score[k];
                bucket[k] += word[k];
            }
        }
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const arr = new Uint8Array(26);
        for (let j = 0; j < word.length; j++) {
            arr[word.charCodeAt(j) - 97]++;
        }
        words[i] = arr;
    }
    const bucket = new Array(26).fill(0);
    for (let i = 0; i < letters.length; i++) {
        bucket[letters[i].charCodeAt() - 97]++;
    }
    let max = 0, acc = 0;
    const cur = [];
    backtrack(0);
    return max;
}
