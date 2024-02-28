// 2975 - Maximum Square Area by Removing Fences From a Field

function maximizeSquareArea(m, n, hFences, vFences) {
    hFences.push(1);
    hFences.sort((a, b) => a - b);
    hFences.push(m);
    vFences.push(1);
    vFences.sort((a, b) => a - b);
    vFences.push(n);
    if (hFences.length > vFences.length) {
        [hFences, vFences] = [vFences, hFences];
    }
    const set = new Set();
    for (let i = 0; i < hFences.length - 1; i++) {
        for (let j = i + 1; j < hFences.length; j++) {
            set.add(hFences[j] - hFences[i]);
        }
    }
    let max = 0;
    for (let i = 0; i < vFences.length - 1; i++) {
        for (let j = vFences.length - 1; j > i; j--) {
            const width = vFences[j] - vFences[i];
            if (width <= max) break;
            if (set.has(width)) {
                max = width;
                break;
            }
        }
    }
    return max ? Number(BigInt(max) ** 2n % 1000000007n) : -1;
}
