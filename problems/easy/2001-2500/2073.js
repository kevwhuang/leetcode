// 2073 - Time Needed to Buy Tickets

function timeRequiredToBuy(tickets, k) {
    let time = tickets[k], target = tickets[k];
    for (let i = 0; i < k; i++) {
        time += Math.min(tickets[i], target);
    }
    for (let i = k + 1; i < tickets.length; i++) {
        time += Math.min(tickets[i], target - 1);
    }
    return time;
}
