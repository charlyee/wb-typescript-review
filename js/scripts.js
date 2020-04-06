/**
 * Using a class (and DOM) in TypeScript.
 */
import { Calculator } from './Calculator.Class.js';
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
/**
 * Record example.
 * We are able to enforce the types within our data-structure!
 * <keyType, valueType>
 */
var myRecord = {
    'first_key': 'Hello, World!',
    'name': 'Bill',
    'nickname': 'Bob'
};
console.log(myRecord['first_key']);
/**
 * Loop example.
 */
var myArray = ['A', 'B', 'C'];
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log(value);
}
/**
 * Functions calling functions.
 */
var originalString = 'mystring';
var addStringToBeginning = function (string) {
    return string + originalString;
};
var addStringToEnd = function (string) {
    return originalString + string;
};
var addStringsToBothEnds = function () {
    return function (beginningString, endingString) {
        originalString = addStringToBeginning(beginningString);
        originalString = addStringToEnd(endingString);
        return originalString;
    };
};
// Calling functions from functions, we need to use new parenthesis!
addStringsToBothEnds()('HELLOBEGIN:', 'GOODBYEEND!');
