

class ContaBancaria {
    constructor(cliente, numConta) {
      this.cliente = cliente;
      this.numConta = numConta;
      this.saldo = 0;
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    mostrarSaldo() {
      console.log(`Saldo da conta ${this.numConta} de ${this.cliente}: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(cliente, numConta, diaRendimento) {
      super(cliente, numConta);
      this.diaRendimento = diaRendimento;
    }
  
    calcularNovoSaldo(taxaRendimento) {
      const hoje = new Date();
      if (hoje.getDate() === this.diaRendimento) {
        const rendimento = this.saldo * (taxaRendimento / 100);
        this.saldo += rendimento;
        console.log(`Rendimento aplicado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
      } else {
        console.log("Rendimento disponível somente no dia do rendimento.");
      }
    }
  }

  
  class ContaEspecial extends ContaBancaria {
    constructor(cliente, numConta, limite) {
      super(cliente, numConta);
      this.limite = limite;
    }

  
    sacar(valor) {
      const saldoComLimite = this.saldo + this.limite;
      if (valor > 0 && valor <= saldoComLimite) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
      } else {
        console.log("Saldo insuficiente para saque.");
      }
    }
  }
  
 
  const contaNormal = new ContaBancaria("Cliente1", 1001);
  const contaPoupanca = new ContaPoupanca("Cliente2", 2002, 1);
  const contaEspecial = new ContaEspecial("Cliente3", 3003, 500);
  
  contaNormal.depositar(1000);
  contaNormal.sacar(500);
  contaNormal.mostrarSaldo();
  
  contaPoupanca.depositar(2000);
  contaPoupanca.calcularNovoSaldo(2);
  contaPoupanca.mostrarSaldo();
  
  contaEspecial.depositar(1500);
  contaEspecial.sacar(1000);
  contaEspecial.mostrarSaldo();
  