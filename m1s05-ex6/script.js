array = 
[
    {nome: "manga", valor: 3.00},
    {nome: "banana", valor: 2.00},
    {nome: "uva", valor: 4.00},
    {nome: "laranja", valor: 3.00},
    {nome: "melao", valor: 5.00}
];

array.forEach(product => {
    console.log(`Nome do produto: ${product.nome}\nPreço: ${product.valor}`)
    console.log('----------------------------')
});

let initialValue = 0;
let totalSum = array.reduce((accumulator, curValue) => {
    return accumulator + curValue.valor;
}, initialValue)

console.log(" ");
console.log(`total de produtos: ${array.length}\nvalor total de todos os produtos: ${totalSum}`);