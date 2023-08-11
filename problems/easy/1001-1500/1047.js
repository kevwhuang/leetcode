// 1047 - Remove All Adjacent Duplicates in String

function removeDuplicates(s) {
    s = s.split('');
    let pos = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] !== s[pos - 1] ? (s[pos++] = s[i]) : pos--;
    }
    return s.slice(0, pos).join('');
}
