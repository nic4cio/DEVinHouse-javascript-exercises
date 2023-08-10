function adicionarElemento(array, element) {
    array.push(element);
    return array;
}

function removerUltimoElemento(array) {
    array.pop();
    return array;
}

function removerElementosIntervalo(array, inicio, fim) {
    removedElements = array.splice(inicio, fim);
    console.log(`removed elements: ${removedElements}`);
    return array;
}

array = ["manga", "banana", "uva", "laranja", "melao"];

console.log(adicionarElemento(array, "abacaxi"));
console.log(removerUltimoElemento(array));
console.log(removerElementosIntervalo(array, 0,3));