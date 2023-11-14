class Voo {
    constructor(compania, origem, destino, dataVoo, horaVoo, numeroDoVoo) {
      this.compania = compania;
      this.origem = origem;
      this.destino = destino;
      this.dataVoo = dataVoo;
      this.horaVoo = horaVoo;
      this.numeroDoVoo = numeroDoVoo;
      this.cadeirasOcupadas = [];
      this.maxCadeiras = 100;
    }
  
    proximoLivre() {
      for (let i = 1; i <= this.maxCadeiras; i++) {
        if (!this.verifica(i)) {
          return i;
        }
      }
      return null; // Todas as cadeiras estão ocupadas
    }
  
    verifica(numeroCadeira) {
      return this.cadeirasOcupadas.includes(numeroCadeira);
    }
  
    ocupa(numeroCadeira) {
      if (numeroCadeira > 0 && numeroCadeira <= this.maxCadeiras && !this.verifica(numeroCadeira)) {
        this.cadeirasOcupadas.push(numeroCadeira);
        return true; // Operação bem-sucedida
      }
      return false; // Cadeira já ocupada ou número inválido
    }
  
    vagas() {
      return this.maxCadeiras - this.cadeirasOcupadas.length;
    }
  
    getVoo() {
      return this.numeroDoVoo;
    }
  
    getData() {
      return this.dataVoo;
    }
  }
  
  // Exemplo de uso da classe
  const voo1 = new Voo("CompaniaA", "CidadeA", "CidadeB", "2023-11-13", "08:00", 123);
  console.log("Número do Voo:", voo1.getVoo());
  console.log("Data do Voo:", voo1.getData());
  console.log("Cadeira Livre:", voo1.proximoLivre());
  console.log("Ocupando cadeira 5:", voo1.ocupa(5));
  console.log("Ocupando cadeira 5 novamente:", voo1.ocupa(5)); // Deve retornar falso
  console.log("Número de vagas disponíveis:", voo1.vagas());
  