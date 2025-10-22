// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  template: `
    <div style="max-width: 400px; margin: 50px auto; padding: 20px;">
      <h2>Login - BarryAI</h2>
      <input [(ngModel)]="email" placeholder="Email" class="input" />
      <input [(ngModel)]="senha" type="password" placeholder="Senha" class="input" />
      <button (click)="login()" class="btn">Entrar</button>
      <p><a routerLink="/auth/register">Criar conta</a></p>
    </div>
  `,
  styles: [`
    .input { width: 100%; padding: 10px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; }
    .btn {
      width: 100%; padding: 12px; background: #3AAED8; color: white; border: none;
      border-radius: 4px; font-weight: bold; cursor: pointer;
    }
  `]
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      const res: any = await this.authService.login(this.email, this.senha).toPromise();
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      
      if (res.user.tipo === 'admin') this.router.navigate(['/admin/dashboard']);
      else if (res.user.tipo === 'cliente-plus') this.router.navigate(['/plus/chat']);
      else this.router.navigate(['/cliente/chat']);
    } catch (err) {
      alert('Login falhou!');
    }
  }
}