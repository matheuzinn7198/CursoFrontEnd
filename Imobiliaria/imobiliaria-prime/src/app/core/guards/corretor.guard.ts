import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CorretorGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const usuario = this.authService.getUsuario();

    if (usuario && usuario.tipo === 'corretor') {
      return true; // é corretor, pode passar
    } else {
      this.router.navigate(['/']); // manda pra home ou outra rota
      return false;
    }
  }
}