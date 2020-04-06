export class Calculator {
  // Properties:
  form: HTMLElement = document.querySelector( '#calculator' );
  num1: HTMLInputElement = document.querySelector( '[name="num1"]' );
  num2: HTMLInputElement = document.querySelector( '[name="num2"]' );
  operator: HTMLSelectElement = document.querySelector( '[name="operator"]' );
  result: HTMLElement = document.querySelector( '#calculator strong' );
  // Methods:
  private add ( num1: number, num2: number ): number {
    return num1 + num2;
  }
  private subtract ( num1: number, num2: number ): number {
    return num1 - num2;
  }
  private multiply ( num1: number, num2: number ): number {
    return num1 * num2;
  }
  private divide ( num1: number, num2: number ): number {
    return num1 / num2;
  }
  private remainder ( num1: number, num2: number ): number {
    return num1 % num2;
  }
  private getOperator (): string {
    return this.operator.value;
  }
  public calculate (): number {
    const num1: number = Number( this.num1.value );
    const num2: number = Number( this.num2.value );
    let answer: number = 0;
    switch ( this.getOperator() ) {
      case 'addition':
        answer = this.add( num1, num2 );
        break;
      case 'subtraction':
        answer = this.subtract( num1, num2 );
        break;
      case 'multiplication':
        answer = this.multiply( num1, num2 );
        break;
      case 'division':
        answer = this.divide( num1, num2 );
        break;
      case 'remainder':
        answer = this.remainder( num1, num2 );
        break;
    }
    this.result.textContent = answer.toString();
    return answer;
  }
}