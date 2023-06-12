class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

window.alert('realizando o cadastro do aluno');
let nomeAluno = window.prompt('nome do aluno:');
let idadeAluno = window.prompt('idade do aluno');

let aluno1 = new Aluno(nomeAluno, idadeAluno);

window.alert(`Aluno: ${aluno1.nome}\nIdade: ${aluno1.idade}`);

