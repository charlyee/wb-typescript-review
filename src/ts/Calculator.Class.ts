class Calculator {
  // Properties:
  form: HTMLElement = document.querySelector( '#calculator' );
  num1: HTMLInputElement = document.querySelector( '[name="num1"]' );
  num2: HTMLInputElement = document.querySelector( '[name="num2"]' );
  operator: HTMLSelectElement = document.querySelector( '[name="operator"]' );
  result: HTMLElement = document.querySelector( '#calculator strong' );
  // Methods:
  add ( num1: number, num2: number ): number {
    return num1 + num2;
  }
  subtract ( num1: number, num2: number ): number {
    return num1 - num2;
  }
  multiply ( num1: number, num2: number ): number {
    return num1 * num2;
  }
  divide ( num1: number, num2: number ): number {
    return num1 / num2;
  }
  remainder ( num1: number, num2: number ): number {
    return num1 % num2;
  }
  getOperator (): string {
    return this.operator.value;
  }
  calculate (): number {
    const num1: number = Number( this.num1.value );
    const num2: number = Number( this.num2.value );
    switch ( this.getOperator() ) {
      case 'addition':
        return this.add( num1, num2 );
      case 'subtraction':
        return this.subtract( num1, num2 );
      case 'multiplication':
        return this.multiply( num1, num2 );
      case 'division':
        return this.divide( num1, num2 );
      case 'remainder':
        return this.remainder( num1, num2 );
    }
  }
}