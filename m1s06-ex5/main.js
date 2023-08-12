const readline = require('readline');
const filtrarPares = require('./filtrarPares');
const somaImpares = require('./somaImpares');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um array de números separados por vírgula: ', input => {
  const numeros = input.split(',').map(numero => parseInt(numero.trim(), 10));

  const numerosPares = filtrarPares(numeros);
  const totalImpares = somaImpares(numeros);

  console.log('Números pares:', numerosPares);
  console.log('Soma dos números ímpares:', totalImpares);

  rl.close();
});
