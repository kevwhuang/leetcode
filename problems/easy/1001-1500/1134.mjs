// 1134 - Armstrong Number

function isArmstrong(n) {
    n = n.toString();
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i] ** n.length;
    }
    return +n === sum;
}
