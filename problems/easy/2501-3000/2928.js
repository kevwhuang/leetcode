// 2928 - Distribute Candies Among Children I

function distributeCandies(n, limit) {
    let count = 0;
    const boundA = Math.min(n, limit);
    for (let a = 0; a <= boundA; a++) {
        const boundB = Math.min(n - a, limit);
        for (let b = 0; b <= boundB; b++) {
            const c = n - a - b;
            if (c < 0) break;
            if (c <= limit) count++;
        }
    }
    return count;
}
