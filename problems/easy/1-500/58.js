// 58 - Length of Last Word

function lengthOfLastWord(s) {
    s = s.trim();
    const pos = s.lastIndexOf(' ');
    return pos === -1 ? s.length : s.length - pos - 1;
}
