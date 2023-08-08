// 1817 - Finding the Users Active Minutes

function findingUsersActiveMinutes(logs, k) {
    const map = new Map();
    for (let i = 0; i < logs.length; i++) {
        if (map.has(logs[i][0])) map.get(logs[i][0]).add(logs[i][1]);
        else map.set(logs[i][0], new Set([logs[i][1]]));
    }
    const ans = new Array(k).fill(0);
    for (const uam of map.values()) {
        ans[uam.size - 1]++;
    }
    return ans;
}
