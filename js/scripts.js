var Calculator = /** @class */ (function () {
    function Calculator() {
        // Properties:
        this.form = document.querySelector('#calculator');
        this.num1 = document.querySelector('[name="num1"]');
        this.num2 = document.querySelector('[name="num2"]');
        this.operator = document.querySelector('[name="operator"]');
        this.result = document.querySelector('#calculator strong');
    }
    // Methods:
    Calculator.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.subtract = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.divide = function (num1, num2) {
        return num1 / num2;
    };
    Calculator.prototype.remainder = function (num1, num2) {
        return num1 % num2;
    };
    Calculator.prototype.getOperator = function () {
        return this.operator.value;
    };
    Calculator.prototype.calculate = function () {
        var num1 = Number(this.num1.value);
        var num2 = Number(this.num2.value);
        var answer = 0;
        switch (this.getOperator()) {
            case 'addition':
                answer = this.add(num1, num2);
                break;
            case 'subtraction':
                answer = this.subtract(num1, num2);
                break;
            case 'multiplication':
                answer = this.multiply(num1, num2);
                break;
            case 'division':
                answer = this.divide(num1, num2);
                break;
            case 'remainder':
                answer = this.remainder(num1, num2);
                break;
        }
        this.result.textContent = answer.toString();
        return answer;
    };
    return Calculator;
}());
// Create calculator from our class.
var newCalculator = new Calculator();
// Event listener.
newCalculator.form.addEventListener('submit', function (event) {
    event.preventDefault();
    newCalculator.calculate();
});
