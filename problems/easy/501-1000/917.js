// 917 - Reverse Only Letters

function reverseOnlyLetters(s) {
    s = s.split('');
    let l = 0;
    let r = s.length - 1;
    while (true) {
        while ((s[l] < 'A' || ('Z' < s[l] && s[l] < 'a') || s[l] > 'z')
            && l < s.length - 1) {
            l++;
        }
        while ((s[r] < 'A' || ('Z' < s[r] && s[r] < 'a') || s[r] > 'z')
            && r > 0) {
            r--;
        }
        if (l >= r) break;
        [s[l++], s[r--]] = [s[r], s[l]];
        if (l >= r) break;
    }
    return s.join('');
}
