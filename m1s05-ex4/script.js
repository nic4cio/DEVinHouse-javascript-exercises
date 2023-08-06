function fibonacci(num){
    // termx is the first term
    // termy is the second term
    // z is the sum of x and y
    let termx = 0;
    let termy = 1;
    let z;

    console.log(`${termx}\n${termy}`);

    let i = 2;
    while(i <= num) {
        z = termx + termy;
        termx = termy;
        termy = z;
        console.log(termy)
        i++;
    }

    return `o ${num} termo da sequência de Fibonacci é: ${termy}`;
}

let n = 7;
console.log(fibonacci(n));