// 1071 - Greatest Common Divisor of Strings

function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    return str1.slice(0, gcd(str1.length, str2.length));
}
