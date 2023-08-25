// 2558 - Take Gifts From the Richest Pile

function pickGifts(gifts, k) {
    let maxVal, maxIndex, cur;
    while (k--) {
        maxVal = gifts[0];
        maxIndex = 0;
        for (let i = 1; i < gifts.length; i++) {
            cur = gifts[i];
            if (cur > maxVal) {
                maxVal = cur;
                maxIndex = i;
            }
        }
        gifts[maxIndex] = Math.floor(Math.sqrt(gifts[maxIndex]));
    }
    return gifts.reduce((s, e) => s + e, 0);
}
