// 201 - Bitwise And of Numbers Range

function rangeBitwiseAnd(left, right) {
    const shifts = Math.log2(left ^ right);
    return left >> shifts << shifts;
}
