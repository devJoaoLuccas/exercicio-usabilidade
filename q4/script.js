// è preciso ter o pacote prompt-sync para funcionar, segue linha de comando, npm install prompt-sync

class Ingresso {
    constructor(valor) {

      this.valor = valor;
    }
  
    imprimeValor() {

      console.log(`Valor do Ingresso: R$ ${this.valor.toFixed(2)}`);
    }
  }
  

  class VIP extends Ingresso {

    constructor(valor, adicional) {

      super(valor);
      this.adicional = adicional;
    }
  
    valorVIP() {
      return this.valor + this.adicional;
    }
  }

  class Normal extends Ingresso {

    imprimeTipo() {

      console.log("Ingresso Normal");
    }
  }
  
  class CamaroteInferior extends VIP {

    constructor(valor, adicional, localizacao) {

      super(valor, adicional);
      this.localizacao = localizacao;
    }
  
    imprimeLocalizacao() {

      console.log(`Camarote Inferior - Localização: ${this.localizacao}`);
    }
  }
  

  class CamaroteSuperior extends VIP {
    constructor(valor, adicional, localizacaoSuperior) {

      super(valor, adicional);
      this.localizacaoSuperior = localizacaoSuperior;

    }
  
    valorIngresso() {
      return this.valorVIP(); 
    }
  
    imprimeLocalizacao() {
      console.log(`Camarote Superior - Localização: ${this.localizacaoSuperior}`);
    }
  }
  

  const prompt = require('prompt-sync')();
  
  console.log("Digite 1 para Ingresso Normal ou 2 para Ingresso VIP:");
  const escolhaTipo = parseInt(prompt());
  
  if (escolhaTipo === 1) {

    const ingressoNormal = new Normal(50);

    ingressoNormal.imprimeTipo();

    ingressoNormal.imprimeValor();

  } else if (escolhaTipo === 2) {

    console.log("Digite 1 para Camarote Superior ou 2 para Camarote Inferior:");
    const escolhaCamarote = parseInt(prompt());
  
    const valorBaseVIP = 80; 

    const adicionalCamaroteSuperior = 20;
  
    if (escolhaCamarote === 1) {

      const camaroteSuperior = new CamaroteSuperior(valorBaseVIP, adicionalCamaroteSuperior, "Setor A");
      camaroteSuperior.imprimeLocalizacao();

      console.log("Valor do Ingresso VIP (Camarote Superior): R$ " + camaroteSuperior.valorIngresso().toFixed(2));

    } else if (escolhaCamarote === 2) {

      const camaroteInferior = new CamaroteInferior(valorBaseVIP, 15, "Setor B");

      camaroteInferior.imprimeLocalizacao();
      console.log("Valor do Ingresso VIP (Camarote Inferior): R$ " + camaroteInferior.valorVIP().toFixed(2));

    } else {
      console.log("Opção inválida.");
    }
  } else {
    console.log("Opção inválida.");
  }