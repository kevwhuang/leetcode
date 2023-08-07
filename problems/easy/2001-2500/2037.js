// 2037 - Minimum Number of Moves to Seat Everyone

function minMovesToSeat(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let moves = 0;
    for (let i = 0; i < seats.length; i++) {
        moves += Math.abs(seats[i] - students[i]);
    }
    return moves;
}
