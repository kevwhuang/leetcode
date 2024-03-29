// 78 - Frequency Counter - constructNote

function constructNote(msg, letters) {
    const freqs = new Array(26).fill(0);
    for (let i = 0; i < letters.length; i++) {
        freqs[letters.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < msg.length; i++) {
        const code = msg.charCodeAt(i) - 97;
        if (freqs[code] === 0) return false;
        freqs[code]--;
    }
    return true;
}
