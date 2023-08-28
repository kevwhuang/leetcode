// 401 - Binary Watch

function readBinaryWatch(turnedOn) {
    if (turnedOn === 0) return ['0:00'];
    if (turnedOn === 9 || turnedOn === 10) return [];
    const bitmap = [
        0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3,
        2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4,
        2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3,
        2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5,
        2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5,
    ];
    const times = [];
    for (let hr = 0; hr <= 11; hr++) {
        for (let min = 0; min <= 59; min++) {
            if (bitmap[hr] + bitmap[min] === turnedOn) {
                times.push(`${hr}:${min.toString().padStart(2, '0')}`);
            }
        }
    }
    return times;
}
