// 10026 - Mortgage Calculator

export function MortgageCalculator() {
    function handleCalculate() {
        const error = document.querySelector('#error');
        let input1 = document.querySelector('#input-1').value;
        let input2 = document.querySelector('#input-2').value;
        let input3 = document.querySelector('#input-3').value;
        const cond1 = !input1 || input1 !== Number(input1).toString();
        const cond2 = !input2 || input2 !== Number(input2).toString();
        const cond3 = !input3 || input3 !== Number(input3).toString();
        if (cond1 || cond2 || cond3) return error.innerText = 'Invalid values';
        input1 = Number(input1), input2 = Number(input2), input3 = Number(input3);
        if (input1 <= 0 || input2 <= 0 || input3 <= 0) {
            return error.innerText = 'Values must be positive';
        }
        const i = input2 / 1200, n = input3 * 12;
        let monthlyPayment = input1 * i * (1 + i) ** n / ((1 + i) ** n - 1);
        let totalPayment = monthlyPayment * n;
        let totalInterest = totalPayment - input1;
        monthlyPayment = monthlyPayment.toFixed(2);
        totalPayment = totalPayment.toFixed(2);
        totalInterest = totalInterest.toFixed(2);
        document.querySelector('#output-1').innerText = monthlyPayment;
        document.querySelector('#output-2').innerText = totalPayment;
        document.querySelector('#output-3').innerText = totalInterest;
        error.innerText = '';
    }
    function handleClear() {
        document.querySelector('#input-1').value = '';
        document.querySelector('#input-2').value = '';
        document.querySelector('#input-3').value = '';
        document.querySelector('#output-1').innerText = '';
        document.querySelector('#output-2').innerText = '';
        document.querySelector('#output-3').innerText = '';
        document.querySelector('#error').innerText = '';
    }
    return (
        <div>
            <input id="input-1" placeholder="Loan amount" />
            <input id="input-2" placeholder="Interest rate" />
            <input id="input-3" placeholder="Loan term" />
            <button onClick={handleCalculate}>Calculate</button>
            <button onClick={handleClear}>Clear</button>
            <p>Monthly payment: $<span id="output-1" /></p>
            <p>Total payment: $<span id="output-2" /></p>
            <p>Total interest: $<span id="output-3" /></p>
            <p id="error" />
        </div>
    );
}
