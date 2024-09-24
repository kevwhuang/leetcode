// 1899 - Merge Triplets to Form Target Triplet

function mergeTriplets(triplets, target) {
    let foundX, foundY, foundZ;
    const x = target[0], y = target[1], z = target[2];
    for (let i = 0; i < triplets.length; i++) {
        const [a, b, c] = triplets[i];
        if (a > x || b > y || c > z) continue;
        if (a === x) foundX = true;
        if (b === y) foundY = true;
        if (c === z) foundZ = true;
        if (foundX && foundY && foundZ) return true;
    }
    return false;
}
