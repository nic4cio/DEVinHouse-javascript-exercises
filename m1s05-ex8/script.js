function calculadora (x, y, op) {
    switch (op) {
        case 'sum':
            return x + y;
        case 'sub':
            return x - y;
        case 'mult':
            return x * y;
        case 'div':
            return x / y;
        default:
            return 'escolha um operador válido'; 
    }
}

let sum = 'sum';
let subtraction = 'sub';
let multiplication = 'mult';
let division = 'div';

console.log(calculadora(1, 2, sum));