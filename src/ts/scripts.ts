/**
 * Using a class (and DOM) in TypeScript.
 */

import { Calculator } from './Calculator.Class.js';

// Create calculator from our class.
const newCalculator: Calculator = new Calculator();
// Event listener.
newCalculator.form.addEventListener( 'submit', (event: Event): void => {
  event.preventDefault();
  newCalculator.calculate();
} );

/**
 * Enum Type.
 * @link https://www.typescriptlang.org/docs/handbook/enums.html
 * enums are a set of named constants!
 */

enum Pizza { PEPPORONI=1, HAWAIIAN=2, CANADIAN=3, HAM=4 }

console.log( `
We have all kinds of pizzas!
Pizza 1 is: ${Pizza[1]}
Pizza 2 is: ${Pizza[2]}
Pizza 3 is: ${Pizza[3]}
Pizza 4 is: ${Pizza[4]}
` );


/**
 * Function.
 * @link https://www.typescriptlang.org/docs/handbook/functions.html
 */

const todoForm: HTMLElement = document.querySelector( '#todo' );
const todoInput: HTMLInputElement = document.querySelector( '[name="todo"]' );
const todoList: HTMLElement = document.querySelector( '#todo ul' );

const addNewTodo = (event: Event): void => {
  event.preventDefault();
  const newLi: HTMLElement = document.createElement( 'LI' );
  newLi.textContent = todoInput.value;
  todoList.appendChild( newLi );
}

todoForm.addEventListener( 'submit', addNewTodo );


/**
 * Literal type example.
 */

const addOrSubtract = ( op: 'add' | 'subtract', num1: number, num2: number ): number => {
  if ( op == 'add' ) return Number( num1 + num2 );
  else return Number( num1 - num2 );
}

// addOrSubtract( 'multiply', 3, 6 ); // Would error now!
console.log( addOrSubtract( 'add', 3, 10 ) ); // 13

/**
 * Record example.
 * We are able to enforce the types within our data-structure!
 * <keyType, valueType>
 */

const myRecord: Record<string, string> = {
  'first_key': 'Hello, World!',
  'name': 'Bill',
  'nickname': 'Bob'
};

console.log( myRecord['first_key'] );

/**
 * Loop example.
 */

const myArray: Array<string> = [ 'A', 'B', 'C' ];
for ( let value of myArray ) {
  console.log( value );
}

/**
 * Functions calling functions.
 */

let originalString = 'mystring';
const addStringToBeginning = (string: string): string => {
  return string + originalString;
}

const addStringToEnd = (string: string): string => {
  return originalString + string;
}

const addStringsToBothEnds = (): Function => {
  return ( beginningString: string, endingString: string ): string => {
    originalString = addStringToBeginning( beginningString );
    originalString = addStringToEnd( endingString );
    return originalString;
  };
}

// Calling functions from functions, we need to use new parenthesis!
addStringsToBothEnds()( 'HELLOBEGIN:', 'GOODBYEEND!' );
