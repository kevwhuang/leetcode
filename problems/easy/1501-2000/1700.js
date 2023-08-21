// 1700 - Number of Students Unable to Eat Lunch

function countStudents(students, sandwiches) {
    const total = sandwiches.length;
    let pos = 0;
    while (true) {
        let delta = 0;
        for (let i = 0; i < students.length; i++) {
            if (students[i] === sandwiches[pos]) {
                delete students[i];
                pos++;
                delta++;
            }
        }
        if (pos === total) return 0;
        if (delta === 0) return total - pos;
        students = students.flat();
    }
}
