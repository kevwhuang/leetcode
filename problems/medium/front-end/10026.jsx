// 10026 - Mortgage Calculator

export function MortgageCalculator() {
    function handleCalculate() {
        const error = document.querySelector('#error');
        let input1 = document.querySelector('#input-1').value;
        let input2 = document.querySelector('#input-2').value;
        let input3 = document.querySelector('#input-3').value;
        if (!input1.length
            || !input2.length
            || !input3.length
            || input1 !== Number(input1).toString()
            || input2 !== Number(input2).toString()
            || input3 !== Number(input3).toString()
        ) {
            error.innerText = 'Invalid values';
            return;
        }
        input1 = Number(input1);
        input2 = Number(input2);
        input3 = Number(input3);
        if (input1 <= 0 || input2 <= 0 || input3 <= 0) {
            error.innerText = 'Values must be positive';
            return;
        }
        const i = input2 / 1200;
        const n = input3 * 12;
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
            <p>Monthly payment: $<span id="output-1"></span></p>
            <p>Total payment: $<span id="output-2"></span></p>
            <p>Total interest: $<span id="output-3"></span></p>
            <p id="error"></p>
        </div>
    );
}
