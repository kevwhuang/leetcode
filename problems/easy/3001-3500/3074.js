// 3074 - Apple Redistribution Into Boxes

function minimumBoxes(apple, capacity) {
    capacity.sort((a, b) => b - a);
    let i = 0, remaining = apple.reduce((s, e) => s + e);
    while (i < capacity.length && remaining > 0) {
        remaining -= capacity[i++];
    }
    return i;
}
