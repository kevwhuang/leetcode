// 3273 - Minimum Amount of Damage Dealt to Bob

function minDamage(power, damage, health) {
    let acc = 0;
    for (let i = 0; i < health.length; i++) {
        health[i] = [Math.ceil(health[i] / power), damage[i]];
        acc += damage[i];
    }
    health.sort((a, b) => b[1] / b[0] - a[1] / a[0]);
    let res = 0;
    for (let i = 0; i < health.length; i++) {
        res += health[i][0] * acc;
        acc -= health[i][1];
    }
    return res;
}
