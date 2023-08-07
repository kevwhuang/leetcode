// 2726 - Calculator With Method Chaining

class Calculator {
    constructor(value) {
        this.value = value;
    }
    add(value) {
        this.value += value;
        return this;
    }
    divide(value) {
        if (!value) throw 'Division by zero is not allowed';
        this.value /= value;
        return this;
    }
    getResult() {
        return this.value;
    }
    multiply(value) {
        this.value *= value;
        return this;
    }
    power(value) {
        this.value **= value;
        return this;
    }
    subtract(value) {
        this.value -= value;
        return this;
    }
}
