let num = 11;
function verifyPrime(number) {
    let counter = 0;
    let i = 2;
    if(number < 2) {
        return 'não é primo';
    }

    do {
        console.log(i);
        if(number % i == 0) {
            counter += 1;
        }
        i++
    } while(i <= number);

    if(counter >= 2) {
        return 'não é primo'
    } else {
        return 'é primo';
    }
}

console.log(verifyPrime(num));