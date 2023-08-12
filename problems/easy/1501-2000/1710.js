// 1710 - Maximum Units on a Truck

function maximumUnits(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let i = 0,
        totalUnits = 0;
    while (truckSize > 0 && i < boxTypes.length) {
        const [num, unit] = boxTypes[i++];
        if (truckSize >= num) {
            truckSize -= num;
            totalUnits += num * unit;
        } else {
            totalUnits += truckSize * unit;
            break;
        }
    }
    return totalUnits;
}
