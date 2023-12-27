// 1710 - Maximum Units on a Truck

function maximumUnits(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let totalUnits = 0, i = 0;
    while (truckSize && i < boxTypes.length) {
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
