// 1103 - Distribute Candies to People

function distributeCandies(candies, num_people) {
    const dist = new Array(num_people).fill(0);
    let cur = 1;
    while (true) {
        for (let i = 0; i < num_people; i++, cur++) {
            if (candies >= cur) {
                candies -= cur;
                dist[i] += cur;
            } else {
                dist[i] += candies;
                return dist;
            }
        }
    }
}
