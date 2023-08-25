// 844 - Backspace String Compare

function backspaceCompare(s, t) {
    let pt_s = s.length - 1, char_s = '', del_s = 0;
    let pt_t = t.length - 1, char_t = '', del_t = 0;
    let cur;
    while (true) {
        while (true) {
            cur = s[pt_s--];
            if (cur === '#') del_s++;
            else if (del_s) del_s--;
            else {
                char_s = cur;
                break;
            }
        }
        while (true) {
            cur = t[pt_t--];
            if (cur === '#') del_t++;
            else if (del_t) del_t--;
            else {
                char_t = cur;
                break;
            }
        }
        if (char_s !== char_t) return false;
        if (pt_s < 0 && pt_t < 0) return true;
    }
}
