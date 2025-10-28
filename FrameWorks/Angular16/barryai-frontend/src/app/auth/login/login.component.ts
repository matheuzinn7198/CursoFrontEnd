// src/app/auth/login/login.component.ts
import { Component } from '@angular/core'; // ← IMPORTANTE!
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div style="max-width: 400px; margin: 50px auto; padding: 20px; font-family: sans-serif;">
      <h2 style="text-align: center; color: #37474F;">Login - BarryAI</h2>
      <input
        [(ngModel)]="email"
        placeholder="Email (ex: cliente@teste.com)"
        class="input"
      />
      <input
        [(ngModel)]="senha"
        type="password"
        placeholder="Senha"
        class="input"
      />
      <button (click)="login()" class="btn">Entrar</button>
      <p style="text-align: center; margin-top: 16px;">
        <a routerLink="/auth/register" style="color: #3AAED8;">Criar conta</a>
      </p>
    </div>
  `,
  styles: [`
    .input {
      width: 100%; padding: 12px; margin: 10px 0;
      border: 1px solid #ccc; border-radius: 8px;
      box-sizing: border-box;
    }
    .btn {
      width: 100%; padding: 12px;
      background: #3AAED8; /* Azul Oceano */
      color: white; border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
    }
    .btn:hover {
      background: #2a8ec8;
    }
  `]
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.email, this.senha)) {
      const user = this.authService.getUser();
      if (user.tipo === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (user.tipo === 'cliente-plus') {
        this.router.navigate(['/plus/chat']);
      } else {
        this.router.navigate(['/cliente/chat']);
      }
    } else {
      alert('Preencha email e senha!');
    }
  }
}