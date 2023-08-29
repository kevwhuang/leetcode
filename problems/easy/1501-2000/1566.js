// 1566 - Detect Pattern of Length M Repeated K or More Times

function containsPattern(arr, m, k) {
    main: for (let i = 0; i <= arr.length - m * k; i++) {
        for (let j = i; j < i + m; j++) {
            for (let x = m; x < m * k; x += m) {
                if (arr[j] !== arr[j + x]) continue main;
            }
        }
        return true;
    }
    return false;
}
