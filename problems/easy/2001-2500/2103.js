// 2103 - Rings and Rods

function countPoints(rings) {
    const freq = new Array(10).fill('');
    for (let i = 0; i < rings.length - 1; i += 2) {
        if (!freq[rings[i + 1]].includes(rings[i])) {
            freq[rings[i + 1]] += rings[i];
        }
    }
    return freq.reduce((s, e) => e.length === 3 ? s + 1 : s, 0);
}
