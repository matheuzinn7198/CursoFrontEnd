import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/services/auth.service';

@Component({
  selector: 'app-home',
  template: `
    <div style="min-height: 100vh; background: linear-gradient(135deg, #ECEFF1 0%, #B3E5FC 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; font-family: 'Segoe UI', Roboto, sans-serif;">
      
      <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); max-width: 700px; width: 100%;">
        <h1 style="color: #37474F; font-size: 2.8rem; margin-bottom: 20px;">
          🧠 <strong>BarryAI</strong>
        </h1>
        
        <p style="font-size: 1.3rem; color: #546E7A; line-height: 1.6; margin-bottom: 30px;">
          Inteligência Artificial <strong>acessível</strong> para todos.<br>
          Pergunte de forma simples e receba respostas <strong>claras e diretas</strong>.
        </p>

        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 30px 0;">
          <div style="background: #3AAED8; color: white; padding: 12px 20px; border-radius: 50px; font-weight: bold;">
            💬 Chat Simples
          </div>
          <div style="background: #3AAED8; color: white; padding: 12px 20px; border-radius: 50px; font-weight: bold;">
            📎 Upload de Arquivos (Plus)
          </div>
          <div style="background: #3AAED8; color: white; padding: 12px 20px; border-radius: 50px; font-weight: bold;">
            👤 Perfil Personalizado
          </div>
        </div>

        <div style="margin-top: 30px;">
          <button 
            (click)="irParaLogin()" 
            style="background: #3AAED8; color: white; border: none; padding: 14px 32px; font-size: 1.1rem; border-radius: 50px; font-weight: bold; cursor: pointer; margin: 0 10px; box-shadow: 0 4px 12px rgba(58, 174, 216, 0.3);">
            Entrar
          </button>
          <button 
            (click)="irParaCadastro()" 
            style="background: white; color: #3AAED8; border: 2px solid #3AAED8; padding: 14px 32px; font-size: 1.1rem; border-radius: 50px; font-weight: bold; cursor: pointer; margin: 0 10px;">
            Criar Conta
          </button>
        </div>

        <p style="margin-top: 25px; color: #78909C; font-size: 0.95rem;">
          ✨ <strong>Experimente agora:</strong> Faça uma pergunta sem criar conta!
        </p>
        <button 
          (click)="demo()" 
          style="background: transparent; color: #37474F; border: none; text-decoration: underline; cursor: pointer; font-size: 0.95rem; margin-top: 8px;">
          Demonstração rápida
        </button>
      </div>

      <footer style="margin-top: 40px; color: #78909C; font-size: 0.9rem;">
        BarryAI © 2025 — IA para todos
      </footer>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Se usuário estiver logado, redireciona para sua área
    if (this.authService.isLoggedIn()) {
      const user = this.authService.getUser();
      if (user.tipo === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (user.tipo === 'cliente-plus') {
        this.router.navigate(['/plus/chat']);
      } else {
        this.router.navigate(['/cliente/chat']);
      }
    }
  }

  irParaLogin() {
    this.router.navigate(['/auth/login']);
  }

  irParaCadastro() {
    this.router.navigate(['/auth/register']);
  }

  demo() {
    const pergunta = prompt('Ex: "Como fazer um bolo simples?"');
    if (pergunta) {
      alert(`BarryAI responde:\n\n"Ótima pergunta! Aqui está uma resposta clara e direta: [resposta simulada]."`);
    }
  }
}