//arquivo responsável pela modelagem de dados para vagas
export class Vaga {
  //atributos
  // private _id: number;
  // private _nome: string;
  // private _foto: string;
  // private _descricao: string;
  // private _salario: number;

  // //métodos
  // //construtor -> método da classe para criação de objetos
  // constructor(id:number, nome: string, foto: string, descricao:string, salario: number){
  //   this._id = id,
  //   this._nome = nome,
  //   this._foto = foto,
  //   this._descricao = descricao,
  //   this._salario = salario
  // }

<<<<<<< HEAD
  //JavaScrip/TypeScrip há uma forma de declara os
  // atributos e já fazer o construtor tudo de uma vez
  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public descricao: string,
    public salario: number
  ) {}
=======
    //JavaScript/TypeScript há uma forma de declarar os atributos e já fazer o construtor tudo de uma vez
    constructor(
        public _id: number, 
        public _nome: string, 
        public _foto: string, 
        public _descricao: string, 
        public _salario: number
    ){}
>>>>>>> 1ab1703770db0c801c17ddfb989feafec2c32271


  // Métodos de conversão de objetos
  //Obj => Json
  public toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      salario: this.salario,
    };
  }
  //Json => Obj
  static fromMap(map: any): Vaga {
    return new Vaga(map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.salario
    )
  }
}
