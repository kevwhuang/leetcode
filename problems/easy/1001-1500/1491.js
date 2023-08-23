// 1491 - Average Salary Excluding the Minimum and Maximum Salary

function average(salary) {
    let total = 0;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < salary.length; i++) {
        const cur = salary[i];
        total += cur;
        if (cur < min) min = cur;
        if (cur > max) max = cur;
    }
    return (total - min - max) / (salary.length - 2);
}
