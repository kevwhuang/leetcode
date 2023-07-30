// 1678 - Goal Parser Interpretation

function interpret(command) {
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
}
