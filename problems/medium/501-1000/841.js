// 841 - Keys and Rooms

function canVisitAllRooms(rooms) {
    const seen = new Set([0]);
    let queue = [0];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const keys = rooms[queue[i]];
            for (let j = 0; j < keys.length; j++) {
                const vert = keys[j];
                if (seen.has(vert)) continue;
                seen.add(vert);
                newQueue.push(vert);
            }
        }
        queue = newQueue;
    }
    return seen.size === rooms.length;
}
