// 592 - Fraction Addition and Subtraction

function fractionAddition(expression) {
    const lcm = (a, b) => a * b / gcd(a, b);
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    if (expression[0] !== '-') expression = '+' + expression;
    const numerators = [], denominators = [];
    for (let i = 0; i < expression.length;) {
        let end1, end2, j = i;
        while (++j < expression.length && (!end1 || !end2)) {
            const char = expression[j];
            if (char === '/') end1 = j;
            else if (char === '+' || char === '-') end2 = j;
        }
        end2 ??= expression.length;
        numerators.push(Number(expression.slice(i, end1)));
        denominators.push(Number(expression.slice(end1 + 1, end2)));
        i = end2;
    }
    let denominator = 1;
    for (let i = 0; i < denominators.length; i++) {
        denominator = lcm(denominators[i], denominator);
    }
    for (let i = 0; i < numerators.length; i++) {
        numerators[i] *= denominator / denominators[i];
    }
    const numerator = numerators.reduce((s, e) => s + e);
    const divisor = Math.abs(gcd(numerator, denominator));
    return `${numerator / divisor}/${denominator / divisor}`;
}
