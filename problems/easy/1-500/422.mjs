// 422 - Valid Word Square

function validWordSquare(words) {
    const height = words.length;
    for (let i = 0; i < height; i++) {
        let pos = i;
        while (pos++ < height) {
            if (words[i]?.[pos] !== words[pos]?.[i]) return false;
        }
    }
    return true;
}
