// 973 - K Closest Points to Origin

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

function kClosest(points, k) {
    points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - b[0] ** 2 - b[1] ** 2);
    while (points.length > k) points.pop();
    return points;
}

module.exports = kClosest;
