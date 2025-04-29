// Atividade 3: Criar uma classe representando uma conta bancária

class ContaBancaria {
    #titular
    #saldo

    // Construtor
    constructor(titular){
        this.#titular = titular;
        this.#saldo = 0; //Inicia o saldo com = 0
    }

    // Método para depositar valor
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso!`);
        } else {
            console.log("Valor inválido para deposito!");
        }
    }
    // Método para sacar valor
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        } else if (valor > this.#saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            console.log("Valor inválido para saque!");
        }
    }

    // Método para exibir o saldo atual
    exibirSaldo() {
        console.log(`Titular: ${this.#titular}, Saldo: R$ ${this.#saldo}`);
    }
}

//instanciar os objetos
let conta1 = new ContaBancaria("José Pereira");
conta1.depositar(1000);
conta1.exibirSaldo();
conta1.sacar(500);
conta1.exibirSaldo();
conta1.sacar(600);//erro
conta1.exibirSaldo();
