class Livro {
    constructor(titulo, autor, anoPublicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
    }
  
    obterInformacoes() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
    }
  }
  
  // Criando três objetos da classe Livro
  const livro1 = new Livro('Os sete maridos de Evelyn Hugo', 'Taylor Jenkins Reid', 2019);
  const livro2 = new Livro('O Colecionador', 'John Fowles', 2018);
  const livro3 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);
  
  // Exibindo as informações de cada livro no console
  console.log(livro1.obterInformacoes());
  console.log(livro2.obterInformacoes());
  console.log(livro3.obterInformacoes());