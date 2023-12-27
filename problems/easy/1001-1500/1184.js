// 1184 - Distance Between Bus Stops

function distanceBetweenBusStops(distance, start, destination) {
    const begin = Math.min(start, destination);
    const end = Math.max(start, destination);
    let total = 0, single = 0;
    for (let i = 0; i < distance.length; i++) {
        total += distance[i];
        if (begin <= i && i < end) single += distance[i];
    }
    return Math.min(single, total - single);
}
