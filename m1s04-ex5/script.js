function calculateWeightedMean() {
    window.alert('iremos calcular a média ponderada');
    window.alert('digite três números e seus respectivos pesos');
    let num1 = parseFloat(window.prompt('digite o primeiro número:'));
    let peso1 = parseFloat(window.prompt('digite o peso do primeiro número:'));
    let num2 = parseFloat(window.prompt('digite o segundo número:'));
    let peso2 = parseFloat(window.prompt('digite o peso do segundo número:'));
    let num3 = parseFloat(window.prompt('digite o terceiro número'));
    let peso3 = parseFloat(window.prompt('digite o peso do terceiro número:'));
    
    let mean = (num1*peso1 + num2*peso2 + num3*peso3) / (peso1 + peso2 + peso3);

    window.alert(`a média artimética ponderada é: ${mean.toFixed(2)}`)
}

calculateWeightedMean()
