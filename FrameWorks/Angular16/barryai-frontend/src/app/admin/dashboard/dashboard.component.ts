import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div style="max-width: 800px; margin: 40px auto; padding: 24px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      <h2 style="color: #37474F; margin-bottom: 20px;">Painel Administrativo</h2>
      <p style="font-size: 16px; color: #546E7A; margin-bottom: 24px;">
        Bem-vindo! Aqui você pode gerenciar usuários, arquivos e configurações da BarryAI.
      </p>

      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <button class="btn" (click)="gerenciarUsuarios()" style="flex: 1; min-width: 200px;">
          Gerenciar Usuários
        </button>
        <button class="btn" (click)="verLogs()" style="flex: 1; min-width: 200px;">
          Ver Logs
        </button>
        <button class="btn" (click)="configuracoes()" style="flex: 1; min-width: 200px;">
          Configurações da IA
        </button>
      </div>
    </div>
  `,
  styles: [`
    .btn {
      padding: 14px 20px;
      background: #3AAED8;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #2a8ec8;
    }
  `]
})
export class DashboardComponent {

  gerenciarUsuarios() {
    alert('Funcionalidade de gerenciamento de usuários (em desenvolvimento)');
  }

  verLogs() {
    alert('Visualização de logs (em breve)');
  }

  configuracoes() {
    alert('Configurações da IA (em breve)');
  }
}