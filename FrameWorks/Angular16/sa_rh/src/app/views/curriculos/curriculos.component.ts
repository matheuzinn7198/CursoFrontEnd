import { Component, OnInit } from '@angular/core';
import { CurriculoService } from 'src/app/core/services/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';


@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent implements OnInit{
  public curriculos: Curriculo[] = []; // vetor para armazenar os currículos do BD

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }
  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe(
      (e) => [
        this.curriculos = e.map(
          (curriculo) => { 
            return Curriculo.fromMap(curriculo);
          }
        )
      ]
    )
  }
}
