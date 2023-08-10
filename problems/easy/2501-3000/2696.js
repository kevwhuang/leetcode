// 2696 - Minimum String Length After Removing Substrings

function minLength(s) {
    while (true) {
        const previousLength = s.length;
        s = s.replaceAll(/AB|CD/g, '');
        if (s.length === previousLength) break;
    }
    return s.length;
}
