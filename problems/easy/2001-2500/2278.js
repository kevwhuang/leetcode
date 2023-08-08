// 2278 - Percentage of Letter in String

function percentageLetter(s, letter) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === letter && count++;
    }
    return Math.floor(count / s.length * 100);
}
