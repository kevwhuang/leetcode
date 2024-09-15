// 3285 - Find Indices of Stable Mountains

function stableMountains(height, threshold) {
    height.pop();
    const indices = [];
    for (let i = 0; i < height.length; i++) {
        if (height[i] > threshold) indices.push(i + 1);
    }
    return indices;
}
