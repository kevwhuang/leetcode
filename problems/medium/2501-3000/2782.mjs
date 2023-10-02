// 2782 - Number of Unique Categories

function numberOfCategories(n, categoryHandler) {
    let categories = 0;
    const set = new Set();
    for (let i = 0; i < n; i++) {
        set.add(i);
    }
    while (set.size) {
        const [cur] = set;
        set.delete(cur);
        for (const compare of set.values()) {
            if (categoryHandler.haveSameCategory(cur, compare)) {
                set.delete(compare);
            }
        }
        categories++;
    }
    return categories;
}
