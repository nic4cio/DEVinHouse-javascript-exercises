function somaImpares(numeros) {
    return numeros.filter(numero => numero % 2 !== 0).reduce((acc, numero) => acc + numero, 0);
  }
  
  module.exports = somaImpares;
  