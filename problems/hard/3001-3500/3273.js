// 3273 - Minimum Amount of Damage Dealt to Bob

function minDamage(power, damage, health) {
    health = health.map(e => Math.ceil(e / power));
    const indices = Array.from({ length: health.length }, (_, i) => i);
    indices.sort((a, b) => health[a] * damage[b] - health[b] * damage[a]);
    let res = 0, time = 0;
    for (let i = 0; i < indices.length; i++) {
        time += health[indices[i]];
        res += damage[indices[i]] * time;
    }
    return res;
}
