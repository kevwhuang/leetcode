// 1221 - Split a String in Balanced Strings

function balancedStringSplit(s) {
    let count = 0,
        unity = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'L' ? unity++ : unity--;
        unity === 0 && count++;
    }
    return count;
}
