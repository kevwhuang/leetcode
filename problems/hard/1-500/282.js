// 282 - Expression Add Operators

function addOperators(num, target) {
    function backtrack(i, acc, pre, cur, exp) {
        if (i === num.length) {
            if (acc !== target || cur) return;
            return res.push(exp.slice(1));
        }
        cur = 10 * cur + Number(num[i++]);
        if (cur) backtrack(i, acc, pre, cur, exp);
        backtrack(i, acc + cur, cur, 0, `${exp}+${cur}`);
        if (exp.length === 0) return;
        backtrack(i, acc - cur, -cur, 0, `${exp}-${cur}`);
        const prod = pre * cur;
        backtrack(i, acc + prod - pre, prod, 0, `${exp}*${cur}`);
    }
    const res = [];
    backtrack(0, 0, 0, 0, '');
    return res;
}
