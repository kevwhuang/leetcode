// 1002 - Find Common Characters

function commonChars(words) {
    let output = words[0].split('');
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        let arr = [...output];
        for (let j = 0; j < word.length; j++) {
            const pos = arr.indexOf(word[j]);
            pos !== -1 && delete arr[pos];
        }
        arr = arr.flat();
        for (let j = 0; j < arr.length; j++) {
            const pos = output.indexOf(arr[j]);
            pos !== -1 && delete output[pos];
        }
        output = output.flat();
    }
    return output;
}
