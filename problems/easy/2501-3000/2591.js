// 2591 - Distribute Money to Maximum Children

function distMoney(money, children) {
    if (money < children) return -1;
    for (let i = children, remaining; i > 0; i--) {
        if (7 * i + children <= money) {
            remaining = money - 8 * i;
            if (remaining > 0 && i === children) continue;
            if (remaining === 4 && children - i === 1) continue;
            return i;
        }
    }
    return 0;
}
