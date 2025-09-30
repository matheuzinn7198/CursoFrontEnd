import { Component, OnInit } from '@angular/core';
import { VagasService } from 'src/app/core/services/vagas.service';
import { Vaga } from 'src/app/models/vaga.model';


@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  //atributos
  public vaga: Vaga = new Vaga(0, '', '', '', 0);
  //rastrear os dados no formulário por interpolação {{}}
  public vagas: Vaga[] = []; // vetor para armazenar as vagas do BD

  //construtor
  constructor(private _vagasService: VagasService) {}
  // aplicando o service no contrutor

  // método onInit
  ngOnInit(): void {
    this.listarVagas(); 
  }

  // 4 métodos para o crud
  listarVagas(): void {
    this._vagasService.getVagas().subscribe(
      (e) => {
        this.vagas = e.map((v) => new Vaga(
          v.id,
          v.nome,
          v.foto,
          v.descricao,
          v.salario
        ));
      },
      (error) => {
        console.error('Erro ao Listar Vagas:', error);
      }
    );
  }

  //Listar Vaga por ID
  listarVgaPorid(vaga: Vaga): void {
    //método para kistar uuma vaga no Formulario para Edição
    this.vaga = vaga;
    // a Vaga clicada è definida com a vaga tual do Formulario
  }

  cadastrarVaga(): void {
    this._vagasService.postVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0); //limpa o Formulário
        this.listarVagas(); //lista as vagas novamente
      },
      (error) => {
        console.error('Erro ao Cadastrar Vaga: ', error);
      }
    );
  }

  atualizarVaga(id: any): void {
    this._vagasService.putVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0); //limpa o formulário
        this.listarVagas(); //lista as vaga novamente
      },
      (error) => {
        console.error('Erro ao Atualizar Vaga: ', error);
      }
    );
  }

  excluirVaga(id: any): void {
    this._vagasService.deleteVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0); //limpa o formulário
        this.listarVagas(); //lista as vaga novamente
      },
      (error) => {
        console.error('Erro ao Atualizar Vaga: ', error);
      }
    );
  }

}
