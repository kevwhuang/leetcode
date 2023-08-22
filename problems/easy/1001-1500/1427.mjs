// 1427 - Perform String Shifts

function stringShift(s, shift) {
    let totalShift = 0;
    for (let i = 0; i < shift.length; i++) {
        if (shift[i][0] === 0) totalShift += shift[i][1];
        else totalShift -= shift[i][1];
    }
    totalShift %= s.length;
    if (totalShift === 0) return s;
    if (totalShift < 0) totalShift += s.length;
    return s.slice(totalShift) + s.slice(0, totalShift);
}
