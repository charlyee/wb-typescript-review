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
        switch (this.getOperator()) {
            case 'addition':
                return this.add(num1, num2);
            case 'subtraction':
                return this.subtract(num1, num2);
            case 'multiplication':
                return this.multiply(num1, num2);
            case 'division':
                return this.divide(num1, num2);
            case 'remainder':
                return this.remainder(num1, num2);
        }
    };
    return Calculator;
}());
