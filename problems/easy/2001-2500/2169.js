// 2169 - Count Operations to Obtain Zero

function countOperations(num1, num2) {
    let operations = 0;
    while (num1 && num2) {
        num1 >= num2 ? num1 -= num2 : num2 -= num1;
        operations++;
    }
    return operations;
}
