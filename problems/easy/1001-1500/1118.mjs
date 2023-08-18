// 1118 - Number of Days in a Month

function numberOfDays(year, month) {
    let days = 31;
    if ([4, 6, 9, 11].includes(month)) days = 30;
    if (month !== 2) return days;
    days = 28;
    year % 4 === 0 && days++;
    [1700, 1800, 1900, 2100].includes(year) && days--;
    return days;
}
