// 1450 - Number of Students Doing Homework at a Given Time

function busyStudent(startTime, endTime, queryTime) {
    let students = 0;
    for (let i = 0; i < startTime.length; i++) {
        startTime[i] <= queryTime && endTime[i] >= queryTime && students++;
    }
    return students;
}
