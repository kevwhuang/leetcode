// 1899 - Merge Triplets to Form Target Triplet

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */

function mergeTriplets(triplets, target) {
    const M = triplets, d = target[0], e = target[1], f = target[2];
    for (let aa, bb, cc, i = 0; i < M.length; i++) {
        const a = M[i][0], b = M[i][1], c = M[i][2];
        if (a > d || b > e || c > f) continue;
        if (a === d) aa = true;
        if (b === e) bb = true;
        if (c === f) cc = true;
        if (aa && bb && cc) return true;
    }
    return false;
}

module.exports = mergeTriplets;
