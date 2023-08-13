// 1185 - Day of the Week

function dayOfTheWeek(day, month, year) {
    const dotw = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dotw[new Date(year, month - 1, day).getDay()];
}
