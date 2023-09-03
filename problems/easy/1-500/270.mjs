// 270 - Closest Binary Search Tree Value

function closestValue(root, target) {
    let val, closest = root.val, diff1, diff2;
    while (root) {
        val = root.val;
        diff1 = Math.abs(target - val);
        diff2 = Math.abs(target - closest);
        if (diff1 < diff2 || (diff1 === diff2 && val < closest)) closest = val;
        root = target < val ? root.left : root.right;
    }
    return closest;
}
