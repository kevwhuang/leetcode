// 3447 - Assign Elements to Groups With Constraints

function assignElements(groups, elements) {
    const map = new Map();
    for (let i = 0; i < elements.length; i++) {
        if (!map.has(elements[i])) map.set(elements[i], i);
    }
    for (let i = 0; i < groups.length; i++) {
        let idx = 1e6;
        const cur = groups[i], sqrt = Math.sqrt(cur);
        for (let i = 1; i <= sqrt; i++) {
            if (cur % i) continue;
            idx = Math.min(map.get(i) ?? 1e6, map.get(cur / i) ?? 1e6, idx);
        }
        groups[i] = idx < 1e6 ? idx : -1;
    }
    return groups;
}
