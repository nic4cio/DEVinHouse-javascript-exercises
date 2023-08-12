class Veiculo {
    constructor(marca, ano) {
      this.marca = marca;
      this.ano = ano;
    }
  
    obterDetalhes() {
      return `Veículo - Marca: ${this.marca}, Ano: ${this.ano}`;
    }
  }
  
  class Carro extends Veiculo {
    constructor(marca, ano, portas) {
      super(marca, ano);
      this.portas = portas;
    }
  
    obterDetalhes() {
      return `Carro - Marca: ${this.marca}, Ano: ${this.ano}, Portas: ${this.portas}`;
    }
  }
  
  const meuCarro = new Carro('Volkswagen', 2022, 4);
  
  console.log(meuCarro.obterDetalhes());
  