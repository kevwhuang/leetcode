// 2575 - Find the Divisibility Array of a String

function divisibilityArray(word, m) {
    const divisibility = new Uint8Array(word.length);
    let cur = 0;
    for (let i = 0; i < word.length; i++) {
        cur = (10 * cur + Number(word[i])) % m;
        if (cur === 0) divisibility[i] = 1;
    }
    return divisibility;
}
