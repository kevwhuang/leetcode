// 459 - Repeated Substring Pattern

function repeatedSubstringPattern(s) {
    const len = s.length;
    const ceil = ~~(s.length / 2);
    let cur = 0;
    let slice;
    loop: while (++cur <= ceil) {
        if (len % cur) continue;
        slice = s.slice(0, cur);
        for (let i = 0; i < len; i += cur) {
            if (!s.startsWith(slice, i)) continue loop;
        }
        return true;
    }
    return false;
}
