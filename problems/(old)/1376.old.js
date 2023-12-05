// 1376 - Time Needed to Inform All Employees

function numOfMinutes(n, headID, manager, informTime) {
    const map = new Map();
    for (let i = 0; i < manager.length; i++) {
        if (map.has(manager[i])) map.get(manager[i]).push(i);
        else map.set(manager[i], [i]);
    }
    let time = 0;
    let queue = [[headID, 0]];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const children = map.get(queue[i][0]);
            if (!children) continue;
            const newTime = queue[i][1] + informTime[queue[i][0]];
            time = Math.max(newTime, time);
            for (let j = 0; j < children.length; j++) {
                newQueue.push([children[j], newTime]);
            }
        }
        queue = newQueue;
    }
    return time;
}
