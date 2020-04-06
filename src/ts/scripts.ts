/**
 * Using a class (and DOM) in TypeScript.
 */

// Create calculator from our class.
const newCalculator: Calculator = new Calculator();
// Event listener.
newCalculator.form.addEventListener( 'submit', event => {
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
