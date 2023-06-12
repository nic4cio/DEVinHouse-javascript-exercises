function repeatString(string, num) {
    let result = '';

    if (num < 0){
        return 'ERROR';
    }

    for(let i = 0; i < num; i++)
    {
        result += string;
    }
    return result;
};

function start() {
    window.alert('repita quantas vezes quiser a string :)');
    let stringRead = window.prompt('qual string você gostaria que fosse repetida?');
    let stringReps = parseInt(window.prompt('quantas vezes você gostaria de repetir a string?'));

    let finalString = repeatString(stringRead, stringReps);
    
    window.alert(`a string final ficou assim: ${finalString}`);
}

start();