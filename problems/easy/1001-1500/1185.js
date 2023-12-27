// 1185 - Day of the Week

function dayOfTheWeek(day, month, year) {
    const arr = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday',
    ];
    return arr[new Date(year, month - 1, day).getDay()];
}
