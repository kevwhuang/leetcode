// 1629 - Slowest Key

function slowestKey(releaseTimes, keysPressed) {
    let max = releaseTimes[0], key = keysPressed[0], i = 0;
    while (++i < releaseTimes.length) {
        const time = releaseTimes[i] - releaseTimes[i - 1];
        if (time < max) continue;
        if (time > max) max = time, key = keysPressed[i];
        if (time > max) continue;
        if (keysPressed[i] > key) key = keysPressed[i];
    }
    return key;
}
