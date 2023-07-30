// 1773 - Count Items Matching a Rule

function countMatches(items, ruleKey, ruleValue) {
    let matches = 0;
    let rule = 0;
    if (ruleKey === 'color') rule = 1;
    if (ruleKey === 'name') rule = 2;
    for (let i = 0; i < items.length; i++) {
        items[i][rule] === ruleValue && matches++;
    }
    return matches;
}
