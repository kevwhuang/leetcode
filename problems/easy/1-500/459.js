// 459 - Repeated Substring Pattern

function repeatedSubstringPattern(s) {
    const len = s.length, bound = ~~(len / 2);
    let cur = 0, slice;
    loop: while (++cur <= bound) {
        if (len % cur) continue;
        slice = s.slice(0, cur);
        for (let i = 0; i < len; i += cur) {
            if (!s.startsWith(slice, i)) continue loop;
        }
        return true;
    }
    return false;
}
