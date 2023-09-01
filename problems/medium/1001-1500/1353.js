// 1353 - Maximum Number of Events That Can Be Attended

function maxEvents(events) {
    events.sort((a, b) => a[0] - b[0]);
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    const len = events.length;
    let count = 0, i = 0, n = 1;
    while (i < len || pq.size()) {
        while (i < len && events[i][0] === n) pq.enqueue(events[i++]);
        if (!pq.isEmpty() && pq.dequeue()) count++;
        while (!pq.isEmpty() && pq.front()[1] === n) pq.dequeue();
        n++;
    }
    return count;
}
