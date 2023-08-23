// 1176 - Diet Plan Performance

function dietPlanPerformance(calories, k, lower, upper) {
    let window = 0;
    for (let i = 0; i < k; i++) {
        window += calories[i];
    }
    let points = 0;
    if (window < lower) points--;
    else if (window > upper) points++;
    for (let i = k; i < calories.length; i++) {
        window -= calories[i - k];
        window += calories[i];
        if (window < lower) points--;
        else if (window > upper) points++;
    }
    return points;
}
