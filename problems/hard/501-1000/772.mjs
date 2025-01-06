// 772 - Basic Calculator III

function calculate(s) {
    for (let acc, i = 0; i < s.length; i++) {
        if (s[i] !== '/') continue;
        let l = i - 1;
        if (s[l] === ')' && (acc = 1)) {
            while (acc) {
                if (s[--l] === ')') acc++;
                else if (s[l] === '(') acc--;
            }
        } else while (!isNaN(s[l - 1])) l--;
        if (s[l - 1] === '*') continue;
        let r = i + 1;
        if (s[r] === '(' && (acc = 1)) {
            while (acc) {
                if (s[++r] === '(') acc++;
                else if (s[r] === ')') acc--;
            }
        } else while (!isNaN(s[r + 1])) r++;
        s = `${s.slice(0, l)}~~(${s.slice(l, r + 1)})${s.slice(r + 1)}`;
        i += 3;
    }
    return eval(s);
}
