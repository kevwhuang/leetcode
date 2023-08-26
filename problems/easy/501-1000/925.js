// 925 - Long Pressed Name

function isLongPressedName(name, typed) {
    let j = 0;
    for (let i = 0, cnt; i < name.length; i++) {
        cnt = 1;
        for (; name[i] === name[i + 1]; i++, cnt++) { }
        for (; name[i] === typed[j]; j++, cnt--) { }
        if (cnt > 0) return false;
    }
    return j === typed.length;
}
