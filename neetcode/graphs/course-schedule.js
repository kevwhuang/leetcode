// 207 - Course Schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function canFinish(numCourses, prerequisites) {
    const adj = new Map();
    const indegree = new Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        const [v1, v2] = prerequisites[i];
        adj.has(v2) ? adj.get(v2).push(v1) : adj.set(v2, [v1]);
        indegree[v1]++;
    }
    const seen = new Set();
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const vert = queue[i];
            seen.add(vert);
            if (!adj.has(vert)) continue;
            const neighbors = adj.get(vert);
            for (let j = 0; j < neighbors.length; j++) {
                const v = neighbors[j];
                if (--indegree[v] === 0) newQueue.push(v);
            }
        }
        queue = newQueue;
    }
    return seen.size === numCourses;
}

module.exports = canFinish;
