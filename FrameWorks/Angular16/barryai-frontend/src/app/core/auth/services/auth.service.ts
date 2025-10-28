import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'token';
  private userKey = 'user';

  login(email: string, senha: string): boolean {
    if (email && senha) {
      const user = {
        nome: email.split('@')[0],
        email,
        tipo: email.includes('plus') ? 'cliente-plus' :
              email.includes('admin') ? 'admin' : 'cliente'
      };
      localStorage.setItem(this.tokenKey, 'fake-jwt-token');
      localStorage.setItem(this.userKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getUser() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    // Não redireciona aqui — deixe o guard ou componente fazer isso
  }
}