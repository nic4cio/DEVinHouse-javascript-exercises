import calculaMedia from "./calculaMedia.js";
import multiplicaArray from "./multiplicaArray.js";
import somaArray from "./somaArray.js";

let str = window.prompt('digite os números separados por vírgulas no formato ex: 1, 2, 3, 4, 5, 6');
let arrayCaptured = str.split(', ');
let arrayOfNumbers = [];
arrayCaptured.forEach(number => {
    arrayOfNumbers.push(Number(number));
})
console.log(`soma dos números: ${somaArray(arrayOfNumbers)}\n
multiplicação dos números: ${multiplicaArray(arrayOfNumbers)}\n
media aritmética dos número: ${calculaMedia(arrayOfNumbers)}`);