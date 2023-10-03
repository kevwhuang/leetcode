// 1910 - Remove All Occurrences of a Substring

function removeOccurrences(s, part) {
    let len;
    while (true) {
        len = s.length;
        s = s.replace(part, '');
        if (len === s.length) return s;
    }
}
