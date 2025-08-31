import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: any = null; // guarda os dados do usuário logado

  constructor() {}

  // Faz login simulando resposta de um backend
  login(email: string, senha: string): boolean {
    // aqui seria chamada a API real, mas vamos simular
    if (email === 'corretor@teste.com' && senha === '123') {
      this.usuario = { nome: 'João Corretor', tipo: 'corretor', token: 'abc123' };
    } else if (email === 'cliente@teste.com' && senha === '123') {
      this.usuario = { nome: 'Maria Cliente', tipo: 'cliente', token: 'xyz789' };
    } else {
      return false; // login inválido
    }

    // salva no localStorage pra não perder ao recarregar a página
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    return true;
  }

  // Faz logout
  logout() {
    this.usuario = null;
    localStorage.removeItem('usuario');
  }

  // Verifica se tem alguém logado
  estaLogado(): boolean {
    if (!this.usuario) {
      const salvo = localStorage.getItem('usuario');
      this.usuario = salvo ? JSON.parse(salvo) : null;
    }
    return !!this.usuario;
  }

  // Retorna os dados do usuário logado
  getUsuario() {
    if (!this.usuario) {
      const salvo = localStorage.getItem('usuario');
      this.usuario = salvo ? JSON.parse(salvo) : null;
    }
    return this.usuario;
  }

  // Pega o token de autenticação
  getToken(): string | null {
    return this.usuario ? this.usuario.token : null;
  }
}