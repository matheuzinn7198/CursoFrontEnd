import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ia-chat-plus',
  template: `
    <div style="height: 100vh; display: flex; flex-direction: column; background: #ECEFF1;">
      <div style="padding: 16px; background: white; border-bottom: 1px solid #CFD8DC; font-weight: bold; color: #37474F;">
        💬 Chat Avançado - Cliente Plus
      </div>
      <div #chatContainer style="flex: 1; padding: 16px; overflow-y: auto; background: white;">
        <div *ngFor="let msg of mensagens" 
             [style.margin-left]="msg.tipo === 'usuario' ? 'auto' : '0'"
             [style.background]="msg.tipo === 'usuario' ? '#3AAED8' : '#37474F'"
             style="max-width: 80%; padding: 12px 16px; border-radius: 18px; margin: 8px 0; color: white;">
          {{ msg.texto }}
        </div>
      </div>
      <div style="padding: 16px; background: white; display: flex; gap: 8px;">
        <input [(ngModel)]="novaMensagem" (keyup.enter)="enviar()" 
               placeholder="Pergunte algo (respostas avançadas)..." 
               style="flex: 1; padding: 12px; border: 1px solid #ccc; border-radius: 24px;" />
        <button (click)="enviar()" style="background: #FFD700; color: black; border: none; padding: 12px 20px; border-radius: 24px; font-weight: bold;">
          Enviar
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class IaChatPlusComponent implements OnInit, AfterViewInit {
  @ViewChild('chatContainer') chatContainer!: ElementRef;
  mensagens: any[] = [];
  novaMensagem = '';

  ngOnInit() {
    this.mensagens.push({ texto: 'Olá, Cliente Plus! Respostas avançadas ativadas.', tipo: 'ia' });
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  enviar() {
    if (!this.novaMensagem.trim()) return;
    this.mensagens.push({ texto: this.novaMensagem, tipo: 'usuario' });
    this.novaMensagem = '';
    this.scrollToBottom();

    setTimeout(() => {
      this.mensagens.push({ texto: 'Analisando... Aqui está uma resposta detalhada para você!', tipo: 'ia' });
      this.scrollToBottom();
    }, 800);
  }

  private scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch {}
  }
}