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
/**
 * Using a class (and DOM) in TypeScript.
 */
// Create calculator from our class.
var newCalculator = new Calculator();
// Event listener.
newCalculator.form.addEventListener('submit', function (event) {
    event.preventDefault();
    newCalculator.calculate();
});
/**
 * Enum Type.
 * @link https://www.typescriptlang.org/docs/handbook/enums.html
 * enums are a set of named constants!
 */
var Pizza;
(function (Pizza) {
    Pizza[Pizza["PEPPORONI"] = 1] = "PEPPORONI";
    Pizza[Pizza["HAWAIIAN"] = 2] = "HAWAIIAN";
    Pizza[Pizza["CANADIAN"] = 3] = "CANADIAN";
    Pizza[Pizza["HAM"] = 4] = "HAM";
})(Pizza || (Pizza = {}));
console.log("\nWe have all kinds of pizzas!\nPizza 1 is: " + Pizza[1] + "\nPizza 2 is: " + Pizza[2] + "\nPizza 3 is: " + Pizza[3] + "\nPizza 4 is: " + Pizza[4] + "\n");
/**
 * Function.
 * @link https://www.typescriptlang.org/docs/handbook/functions.html
 */
var todoForm = document.querySelector('#todo');
var todoInput = document.querySelector('[name="todo"]');
var todoList = document.querySelector('#todo ul');
var addNewTodo = function (event) {
    event.preventDefault();
    var newLi = document.createElement('LI');
    newLi.textContent = todoInput.value;
    todoList.appendChild(newLi);
};
todoForm.addEventListener('submit', addNewTodo);
/**
 * Literal type example.
 */
var addOrSubtract = function (op, num1, num2) {
    if (op == 'add')
        return Number(num1 + num2);
    else
        return Number(num1 - num2);
};
// addOrSubtract( 'multiply', 3, 6 ); // Would error now!
console.log(addOrSubtract('add', 3, 10)); // 13
