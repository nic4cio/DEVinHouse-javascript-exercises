// Criando o array de alunos
const alunos = [
    { nome: 'João', nota1: 7, nota2: 8 },
    { nome: 'Maria', nota1: 8, nota2: 6 },
    { nome: 'Pedro', nota1: 10, nota2: 10 },
  ];

  const alunosMedias = alunos.map(aluno => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    return { nome: aluno.nome, media };
  });
  
  alunosMedias.sort((a, b) => b.media - a.media);
  console.log(alunosMedias);
  