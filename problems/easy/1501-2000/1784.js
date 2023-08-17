// 1784 - Check if Binary String Has at Most One Segment of Ones

function checkOnesSegment(s) {
    let checked = false;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '0') checked = true;
        else if (checked) return false;
    }
    return true;
}
