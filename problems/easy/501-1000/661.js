// 661 - Image Smoother

function imageSmoother(img) {
    function smooth(i, j) {
        let total = 0, cells = 0;
        for (let di = i - 1; di <= i + 1; di++) {
            if (di < 0 || di >= height) continue;
            for (let dj = j - 1; dj <= j + 1; dj++) {
                if (dj < 0 || dj >= width) continue;
                total += img[di][dj];
                cells++;
            }
        }
        return Math.floor(total / cells);
    }
    const height = img.length, width = img[0].length;
    const res = [];
    for (let i = 0; i < height; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            row.push(smooth(i, j));
        }
        res.push(row);
    }
    return res;
}
