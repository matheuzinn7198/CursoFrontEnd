//Atividade 1: Criar uma classe chamada Produto com os atributos nome, preco e desconto. Criar um método que calcule o desconto do produto. Criar dois objetos da classe Produto e exibir os dados deles no console.
// atributos: nome, preço, estoque
// métodos: vender, repor, exibirInfo()

class Produto{
    //encapsulamento dos produtos
    #nome
    #preco
    #estoque
    //construtor
    constructor(nome,preco,estoque){
        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }
    //métodos
    vender(quantidade){
        if(this.#estoque >= quantidade){
            this.#estoque -= quantidade;//estoque = estoque - quantidade
            console.log(`Venda realizada com sucesso! Estoque atual: ${this.#estoque}`);

        }else{
            console.log(`Estoque insuficiente! Estoque atual: ${this.#estoque}`);
        }
    }

    repor(quantidade){
        this.#estoque += quantidade; //estoque = estoque + quantidade
        console.log(`Estoque Reposto! Estoque atual: ${this.#estoque}`);
    }

    exibirInfo(){
        console.log(`Nome: ${this.#nome}, Preço: ${this.#preco}, Estoque: ${this.#estoque}`);
    }
}
//instanciar os objetos
let produto1 = new Produto("Arroz", 30, 100);
produto1.exibirInfo();
produto1.vender(10);
produto1.exibirInfo();
produto1.vender(200);
produto1.repor(50);
produto1.exibirInfo();