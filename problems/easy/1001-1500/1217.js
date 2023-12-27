// 1217 - Minimum Cost to Move Chips to the Same Position

function minCostToMoveChips(position) {
    let odd = 0, even = 0;
    for (let i = 0; i < position.length; i++) {
        position[i] % 2 ? odd++ : even++;
    }
    return Math.min(odd, even);
}
