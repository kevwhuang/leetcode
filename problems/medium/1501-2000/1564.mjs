// 1564 - Put Boxes Into the Warehouse I

function maxBoxesInWarehouse(boxes, warehouse) {
    boxes.sort((a, b) => a - b);
    for (let i = 1; i < warehouse.length; i++) {
        warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
    }
    let i = warehouse.length, j = 0;
    while (--i >= 0 && j < boxes.length) {
        if (warehouse[i] < boxes[j]) continue;
        j++;
    }
    return j;
}
