// 3184 - Count Pairs That Form a Complete Day I

function countCompleteDayPairs(hours) {
    let pairs = 0;
    const len = hours.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((hours[i] + hours[j]) % 24) continue;
            pairs++;
        }
    }
    return pairs;
}
