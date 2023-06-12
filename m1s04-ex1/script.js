function calculateMean() {
    window.alert("digite três números");
    let num1 = parseFloat(window.prompt('digite o primeiro número:'));
    let num2 = parseFloat(window.prompt('digite o segundo número:'));
    let num3 = parseFloat(window.prompt('digite o terceiro número'));
    
    let mean = (num1 + num2 + num3) / 3;

    window.alert(`a média dos três números é: ${mean.toFixed(2)}`)
}

calculateMean()