// 1629 - Slowest Key

function slowestKey(releaseTimes, keysPressed) {
    let maxTime = releaseTimes[0], maxKey = keysPressed[0];
    for (let i = 1, time; i < releaseTimes.length; i++) {
        time = releaseTimes[i] - releaseTimes[i - 1];
        if (time === maxTime) {
            if (keysPressed[i] > maxKey) maxKey = keysPressed[i];
        } else if (time > maxTime) {
            maxTime = time;
            maxKey = keysPressed[i];
        }
    }
    return maxKey;
}
