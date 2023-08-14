// 2432 - The Employee That Worked on the Longest Task

function hardestWorker(_, logs) {
    let employee = logs[0][0];
    let maxTimeSpent = logs[0][1];
    for (let i = 1; i < logs.length; i++) {
        const timeSpent = logs[i][1] - logs[i - 1][1];
        if (timeSpent > maxTimeSpent) {
            employee = logs[i][0];
            maxTimeSpent = timeSpent;
        } else if (timeSpent === maxTimeSpent) {
            employee = Math.min(logs[i][0], employee);
        }
    }
    return employee;
}
