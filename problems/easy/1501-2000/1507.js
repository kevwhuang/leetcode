// 1507 - Reformat Date

function reformatDate(date) {
    let [day, month, year] = date.split(' ');
    const mapping = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec',
    ];
    day = day.length === 4 ? day[0] + day[1] : '0' + day[0];
    month = String(mapping.indexOf(month) + 1).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
