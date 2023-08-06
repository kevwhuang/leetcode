// 2810 - Faulty Keyboard

function finalString(s) {
    let final = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') final.reverse();
        else final.push(s[i]);
    }
    return final.join('');
}
