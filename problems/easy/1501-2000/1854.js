// 1854 - Maximum Population Year

function maximumPopulation(logs) {
    const populations = new Array(101).fill(0);
    for (let i = 0; i < logs.length; i++) {
        for (let j = logs[i][0]; j < logs[i][1]; j++) {
            populations[j - 1950]++;
        }
    }
    let maxYear = 1950, maxPopulation = 0;
    for (let i = 0; i < populations.length; i++) {
        const pop = populations[i];
        if (pop > maxPopulation) {
            maxYear = i + 1950;
            maxPopulation = pop;
        }
    }
    return maxYear;
}
