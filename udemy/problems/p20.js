// 20 - nestedEvenSum

function nestedEvenSum(obj) {
    function traverse(item) {
        if (typeof item === 'number') {
            if (item % 2 === 0) sum += item;
        } else if (typeof item === 'object') {
            for (const k in item) {
                traverse(item[k]);
            }
        }
    }
    let sum = 0;
    traverse(obj);
    return sum;
}
