// 2224 - Minimum Number of Operations to Convert Time

function convertTime(current, correct) {
    const transform = s => +(s[0] + s[1]) * 60 + +(s[3] + s[4]);
    current = transform(current);
    correct = transform(correct);
    let operations = 0;
    while (current < correct) {
        const diff = correct - current;
        if (diff >= 60) current += 60;
        else if (diff >= 15) current += 15;
        else if (diff >= 5) current += 5;
        else current++;
        operations++;
    }
    return operations;
}
