
function calculaIMC() {
    window.alert('vamos calcular o Índice de Massa Corporal (IMC)');
    let peso = parseFloat(window.prompt('qual é o seu peso em kg?'));
    let altura = parseFloat(window.prompt('qual é a sua altura em m?'));

    let imc = peso / altura**2

    window.alert(`seu IMC é: ${imc.toFixed(2)}`);
}

calculaIMC()