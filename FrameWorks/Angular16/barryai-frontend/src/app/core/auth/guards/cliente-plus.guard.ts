// src/app/core/auth/guards/cliente-plus.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ClientePlusGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      if (user.tipo === 'cliente-plus') {
        return true;
      }
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}