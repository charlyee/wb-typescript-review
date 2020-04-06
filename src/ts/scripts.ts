// Create calculator from our class.
const newCalculator: Calculator = new Calculator();
// Event listener.
newCalculator.form.addEventListener( 'submit', event => {
  event.preventDefault();
  newCalculator.calculate();
} );