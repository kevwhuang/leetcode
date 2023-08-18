// 2303 - Calculate Amount Paid in Taxes

function calculateTax(brackets, income) {
    let tax = 0;
    for (let i = 0; i < brackets.length; i++) {
        const prevBracket = brackets[i - 1]?.[0] || 0;
        if (income > brackets[i][0]) {
            tax += (brackets[i][0] - prevBracket) * brackets[i][1] / 100;
        } else {
            tax += (income - prevBracket) * brackets[i][1] / 100;
            break;
        }
    }
    return tax;
}
