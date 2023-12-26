// 1106 - Parsing a Boolean Expression

function parseBoolExpr(expression) {
    function all(and, ...args) {
        for (let i = 0; i < args.length; i++) {
            and &= args[i];
        }
        return and;
    }
    function any(or, ...args) {
        for (let i = 0; i < args.length; i++) {
            or |= args[i];
        }
        return or;
    }
    const t = true, f = false;
    return eval(expression.replaceAll('&', 'all').replaceAll('|', 'any'));
}
