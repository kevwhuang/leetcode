// 434 - Number of Segments in a String

function countSegments(s) {
    s = s.trim().split(' ');
    let segments = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] && segments++;
    }
    return segments;
}
