import { Component } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent { //controller -> 
  //atributos
  public vaga: Vaga = new Vaga(0,"","","",0);
  //rastrear os dados no formulário por interpolção {{}}
  public vagas: Vaga[] = []; //vetor para armazenar as vagas do BD

  //construtor
  constructor(private _vagasService: VagasService){} //aplicando o service no construtor

  //método onInit
  ngOnInit(): void{
    this.listarVagas();
  }

  //4 métodos para o crud
  listarVagas(): void{
    this._vagasService.getVagas().subscribe(
      (e) => {
        this.vagas = e.map(
          (vaga)=> Vaga.fromMap(vaga)
        );
      }, (error) => {
        console.error("Erro ao Listar Vagas: ",error);
      }
    );
  }

  //listar Vaga por ID - vaga unica
  listarVagaPorId(vaga:Vaga): void{
    //método para listar uma vaga no formulário para edição
    this.vaga = vaga;
    //a vaga clicada é definida como a vaga atual do formulário
  }
  
  //CREATE - vaga
  cadastrarVaga(): void{
    this._vagasService.postVaga(this.vaga).subscribe(
    () =>{
      this.vaga = new Vaga(0, "","","", 0);//limpa o Formulário
      this.listarVagas();//lista as vagas novamente
    }, (error) => {console.error("Erro ao Cadastrar Vaga: ", error);}
    );
  }

  //UPDATE - Vaga
  atualizarVaga(id:any):void{
    this._vagasService.putVaga(id,this.vaga).subscribe(
    () =>{
      this.vaga = new Vaga(0, "","","", 0);//limpa o formulário
      this.listarVagas();//lista as vagas novamente
    }, (error) => {console.error("Erro ao Atualizar Vaga: ", error);}
    );
  }

  //delete - Vaga
  excluirVaga(id:any): void{
    this._vagasService.deleteVaga(id).subscribe(
          () =>{
      this.vaga = new Vaga(0, "","","", 0);//limpa o formulário
      this.listarVagas();//lista as vagas novamente
    }, (error) => {console.error("Erro ao Deletar Vaga: ", error);}
    );
  }

}
