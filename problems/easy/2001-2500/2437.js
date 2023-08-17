// 2437 - Number of Valid Clock Times

function countTime(time) {
    const [h1, h2] = [time[0], time[1]];
    let variations = 1;
    if (h1 === '?' && h2 === '?') variations *= 24;
    else if (h1 === '?' && h2 <= '3') variations *= 3;
    else if (h1 === '?' && h2 > '3') variations *= 2;
    else if (h1 === '0' && h2 === '?') variations *= 10;
    else if (h1 === '1' && h2 === '?') variations *= 10;
    else if (h1 === '2' && h2 === '?') variations *= 4;
    if (time[3] === '?') variations *= 6;
    if (time[4] === '?') variations *= 10;
    return variations;
}
