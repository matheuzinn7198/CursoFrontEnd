import { Component, OnInit, Inject } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/core/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent implements OnInit {
  public vaga: Vaga = new Vaga(0, '', '', '', 0);
  public vagas: Vaga[] = [];

  constructor(@Inject(VagasService) private _vagasService: VagasService) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(): void {
    this._vagasService.getVagas().subscribe(
      (e: any[]) => {
        this.vagas = e.map((vaga: any) => Vaga.fromMap ? Vaga.fromMap(vaga) : vaga);
      },
      (error) => {
        console.error('Erro ao Listar Vagas: ', error);
      }
    );
  }

 listarVagaPorId(vaga: Vaga): void {
  this.vaga = JSON.parse(JSON.stringify(vaga)); // Cópia profunda
}

  cadastrarVaga(): void {
    this._vagasService.postVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (error) => {
        console.error('Erro ao Cadastrar Vaga: ', error);
      }
    );
  }

  atualizarVaga(id: number): void {
    this._vagasService.putVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (error) => {
        console.error('Erro ao Atualizar Vaga: ', error);
      }
    );
  }

  excluirVaga(id: number): void {
    this._vagasService.deleteVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (error) => {
        console.error('Erro ao Deletar Vaga: ', error);
      }
    );
  }
}