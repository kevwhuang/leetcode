// 733 - Flood Fill

function floodFill(image, sr, sc, color) {
    const targ = image[sr][sc];
    const stack = [[sr, sc]];
    while (stack.length) {
        [sr, sc] = stack.at(-1);
        stack.pop();
        if (image[sr][sc] === color) continue;
        image[sr][sc] = color;
        image[sr - 1]?.[sc] === targ && stack.push([sr - 1, sc]);
        image[sr + 1]?.[sc] === targ && stack.push([sr + 1, sc]);
        image[sr]?.[sc - 1] === targ && stack.push([sr, sc - 1]);
        image[sr]?.[sc + 1] === targ && stack.push([sr, sc + 1]);
    }
    return image;
}
