// 476 - Number Complement

function findComplement(num) {
    let mask = 1;
    while (mask < num) mask = mask << 1 | 1;
    return ~num & mask;
}
