// 1899 - Merge Triplets to Form Target Triplet

function mergeTriplets(triplets, target) {
    const [x, y, z] = target;
    let foundX = false, foundY = false, foundZ = false;
    for (let i = 0; i < triplets.length; i++) {
        const [a, b, c] = triplets[i];
        if (a > x || b > y || c > z) continue;
        if (a === x) foundX = true;
        if (b === y) foundY = true;
        if (c === z) foundZ = true;
        if (foundX && foundY && foundZ) return true;
    }
    return foundX && foundY && foundZ;
}
