// 3000 - Maximum Area of Longest Diagonal Rectangle

function areaOfMaxDiagonal(dimensions) {
    let maxArea = 0, maxDiagonal = 0;
    for (let i = 0; i < dimensions.length; i++) {
        const [a, b] = dimensions[i];
        const diagonal = a * a + b * b;
        if (diagonal < maxDiagonal) continue;
        if (diagonal > maxDiagonal) maxArea = a * b;
        else maxArea = Math.max(a * b, maxArea);
        maxDiagonal = diagonal;
    }
    return maxArea;
}
