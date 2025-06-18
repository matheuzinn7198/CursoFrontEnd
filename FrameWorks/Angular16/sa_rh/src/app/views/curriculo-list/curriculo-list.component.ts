import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../core/services/curriculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.css']
})
export class CurriculoListComponent implements OnInit {
  curriculos: any[] = [];

  constructor(
    private curriculoService: CurriculoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.curriculoService.getCurriculos().subscribe((data: any[]) => {
      this.curriculos = data;
    });
  }
}
