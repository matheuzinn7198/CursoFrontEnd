import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculoService } from '../../core/services/curriculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.css']
})
export class CurriculoFormComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private curriculoService: CurriculoService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      experiencia: [''],
      formacao: [''],
      habilidades: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.curriculoService.getCurriculoById(Number(id)).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const curriculo = this.form.value;

    if (this.isEditMode) {
      curriculo.id = this.route.snapshot.paramMap.get('id');
      this.curriculoService.updateCurriculo(curriculo).subscribe(() => {
        this.snackBar.open('Currículo atualizado com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/curriculos']);
      });
    } else {
      this.curriculoService.createCurriculo(curriculo).subscribe(() => {
        this.snackBar.open('Currículo cadastrado com sucesso!', 'Fechar', { duration: 3000 });
        this.router.navigate(['/curriculos']);
      });
    }
  }
}
