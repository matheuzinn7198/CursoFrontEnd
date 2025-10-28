import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <div style="max-width: 400px; margin: 50px auto; padding: 20px; font-family: sans-serif; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <h2 style="text-align: center; color: #37474F; margin-bottom: 24px;">Criar Conta - BarryAI</h2>

      <input
        [(ngModel)]="nome"
        placeholder="Nome completo"
        class="input"
        style="margin-bottom: 12px; width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px;"
      />
      <input
        [(ngModel)]="email"
        type="email"
        placeholder="Email (ex: plus@teste.com)"
        class="input"
        style="margin-bottom: 12px; width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px;"
      />
      <input
        [(ngModel)]="senha"
        type="password"
        placeholder="Senha"
        class="input"
        style="margin-bottom: 16px; width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px;"
      />

      <select [(ngModel)]="tipo" class="input" style="margin-bottom: 20px; width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px;">
        <option value="cliente">Cliente Comum</option>
        <option value="cliente-plus">Cliente Plus (upload de arquivos)</option>
      </select>

      <button (click)="registrar()" 
              style="width: 100%; padding: 12px; background: #3AAED8; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">
        Criar Conta
      </button>

      <p style="text-align: center; margin-top: 20px;">
        <a routerLink="/auth/login" style="color: #3AAED8; text-decoration: underline;">
          Já tem conta? Faça login
        </a>
      </p>
    </div>
  `,
  styles: []
})
export class RegisterComponent {
  nome = '';
  email = '';
  senha = '';
  tipo: 'cliente' | 'cliente-plus' = 'cliente';

  constructor(private authService: AuthService, private router: Router) {}

  registrar(): void {
    if (!this.nome || !this.email || !this.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    // Simula cadastro
    const mockUser = {
      nome: this.nome,
      email: this.email,
      tipo: this.tipo
    };
    localStorage.setItem('user', JSON.stringify(mockUser));
    localStorage.setItem('token', 'fake-jwt-token');
    alert('Conta criada com sucesso!');
    this.router.navigate(['/auth/login']);
  }
}