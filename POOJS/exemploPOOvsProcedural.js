//diferença entre POO e Procedural()

//Procedural
// declaracao de variavel
let produto1 = {
    nome: "Celular",
    preco: 1000,
    desconto: function(){
        return this.preco * 0.1;
    }
}//coleção

let produto2 = {
    nome: "Camera Digital",
    preco: 5000,
    desconto: function(){
        return this.preco * 0.1;
    }
}//coleção

// POO - class de produtos

class Produto{
    //atributos
    #nome; // # privado
    #preco; // # privado

    
    contructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }
    //criar métodos getter e setter 
    get getNome(){
        return this.#nome;
    }
    get getPreco(){
        return this.#preco;
    }
    desconto(){
        return this.getPreco * 0.1; // erro ao chamar this.preco, pois o atributo é privado
    }
}

// instanciar um objeto
let p1 = new Produto("Impressora", 2000);
let p2 = new Produto("Tablet", 1500);





//exemplos de uso de POO

class Pessoa{
    //atributos privados
    #nome;
    #idade;
    #cpf;

    //construtor
    constructor(nome, idade, cpf){
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }
    //métodos publicos
    get getNome(){return this.#nome;}
    get getIdade(){return this.#idade;}
    get getCpf(){return this.#cpf;}

    set setIdade(idade){this.#idade = idade;}

    //método Informações
    exibirInfo(){
        console.log(`Nome: ${this.getNome} \nIdade: ${this.getIdade} \nCPF: ${this.getCpf}`);
    }

}

let pessoa1 = new Pessoa("João", 30, "123.456.789-00");
let pessoa2 = new Pessoa("Maria", 30, "987.654.321-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

pessoa1.setIdade = 31; //atualiza a idade
pessoa1.exibirInfo(); //exibir informações atrualizadas

//herança (extends)

class Funcionario extends Pessoa{
    //atributos privados
    #cargo;
    #salario;

    //construtor
    constructor(nome, idade, cpf, cargo, salario){
        super(nome, IdleDeadline, cpf); //chama o construtor da superclasse
        this.#cargo = cargo;
        this.#salario = salario;
    }
    //metodos publicos
    get getCargo(){
        return this.#cargo;
    }
    get getSalario(){
        return this.#salario;
    }
    get getSalario(){
        return this.#salario;
    }
    get getCargo(){
        return this.#cargo;
    }

    //metodo exibirInfo
    exibirInfo(){
        super.exibirInfo(); // chama superclasse
        console.log(`Cargpo: ${this.getCargo} \nSalario: ${this.getSalario}`);
    }
}

let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Matorista", 3000);

funcionario1.exibirInfo();
funcionario1.setSalario = 3500;
funcionario1.exibirInfo(); //exibir as informações atualizadas