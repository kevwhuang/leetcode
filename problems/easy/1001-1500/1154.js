// 1154 - Day of the Year

function dayOfYear(date) {
    const cumulative = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let [year, month, day] = date.split('-');
    year = +year;
    month = +month - 1;
    day = +day;
    const leap = Number(year % 4 === 0 && year !== 1900 && month > 1);
    return cumulative[month] + day + leap;
}
