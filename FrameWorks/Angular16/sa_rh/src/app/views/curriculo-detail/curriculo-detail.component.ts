import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculoService } from '../../core/services/curriculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curriculo-detail',
  templateUrl: './curriculo-detail.component.html',
  styleUrls: ['./curriculo-detail.component.css']
})
export class CurriculoDetailComponent implements OnInit {
  curriculo: any;

  constructor(
    private route: ActivatedRoute,
    private curriculoService: CurriculoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.curriculoService.getCurriculoById(Number(id)).subscribe(
        (data: any) => {
          this.curriculo = data;
        },
        error => {
          this.snackBar.open('Erro ao carregar currículo', 'Fechar', { duration: 3000 });
        }
      );
    }
  }
}
