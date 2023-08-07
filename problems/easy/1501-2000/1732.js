// 1732 - Find the Highest Altitude

function largestAltitude(gain) {
    let altitude = 0,
        highest = 0;
    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        if (altitude > highest) highest = altitude;
    }
    return highest;
}
