// 1436 - Destination City

function destCity(paths) {
    const cities = new Set();
    for (let i = 0; i < paths.length; i++) {
        cities.add(paths[i][0]);
    }
    for (let i = 0; i < paths.length; i++) {
        if (!cities.has(paths[i][1])) return paths[i][1];
    }
}
