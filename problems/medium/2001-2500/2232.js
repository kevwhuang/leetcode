// 2232 - Minimize Result by Adding Parentheses to Expression

function minimizeResult(expression) {
    let res, min = Infinity;
    const index = expression.indexOf('+');
    for (let i = 0; i < index; i++) {
        const a = expression.slice(0, i);
        const b = +expression.slice(i, index);
        for (let j = index + 2; j <= expression.length; j++) {
            const c = +expression.slice(index + 1, j);
            const d = expression.slice(j);
            const eval = (a || 1) * (b + c) * (d || 1);
            if (eval >= min) continue;
            res = `${a}(${b}+${c})${d}`;
            min = eval;
        }
    }
    return res;
}
