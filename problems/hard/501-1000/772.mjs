// 772 - Basic Calculator III

function calculate(s) {
    for (let i = 0, l, r, count; i < s.length; i++) {
        if (s[i] !== '/') continue;
        l = i - 1;
        if (s[l] === ')' && (count = 1)) {
            while (count) {
                if (s[--l] === ')') count++;
                else if (s[l] === '(') count--;
            }
        } else while (!isNaN(s[l - 1])) l--;
        if (s[l - 1] === '*') continue;
        r = i + 1;
        if (s[r] === '(' && (count = 1)) {
            while (count) {
                if (s[++r] === '(') count++;
                else if (s[r] === ')') count--;
            }
        } else while (!isNaN(s[r + 1])) r++;
        s = `${s.slice(0, l)}~~(${s.slice(l, r + 1)})${s.slice(r + 1)}`;
        i += 3;
    }
    return eval(s);
}
