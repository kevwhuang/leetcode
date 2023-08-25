// 1598 - Crawler Log Folder

function minOperations(logs) {
    let depth = 0;
    for (let i = 0, cur; i < logs.length; i++) {
        cur = logs[i];
        if (cur === './') {
            continue;
        } else if (cur === '../') {
            depth = Math.max(0, depth - 1);
        } else {
            depth++;
        }
    }
    return depth;
}
