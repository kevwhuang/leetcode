// 412 - Fizz Buzz

function fizzBuzz(n) {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        let current = String(i);
        if (!(i % 15)) current = 'FizzBuzz';
        else if (!(i % 3)) current = 'Fizz';
        else if (!(i % 5)) current = 'Buzz';
        answer.push(current);
    }
    return answer;
}
