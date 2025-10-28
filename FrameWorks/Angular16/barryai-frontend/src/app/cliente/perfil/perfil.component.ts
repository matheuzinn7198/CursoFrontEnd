import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/services/auth.service';

@Component({
  selector: 'app-perfil',
  template: `
    <div style="max-width: 500px; margin: 40px auto; padding: 24px; background: white; border-radius: 12px;">
      <h2>Meu Perfil</h2>
      <p><strong>Nome:</strong> {{ usuario?.nome }}</p>
      <p><strong>Email:</strong> {{ usuario?.email }}</p>
      <p><strong>Tipo:</strong> {{ usuario?.tipo }}</p>
      <button (click)="logout()" style="background: #FF5722; color: white; border: none; padding: 10px 20px; border-radius: 4px;">
        Sair
      </button>
    </div>
  `,
  styles: []
})
export class PerfilComponent {
  usuario: any = null;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }
}