// 2410 - Maximum Matching of Players With Trainers

function matchPlayersAndTrainers(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0, j = 0; i < players.length;) {
        while (players[i] > trainers[j]) j++;
        if (j === trainers.length) break;
        i++, j++, count++;
    }
    return count;
}
