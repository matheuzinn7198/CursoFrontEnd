import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ia-chat',
  template: `
    <div style="height: 100vh; display: flex; flex-direction: column; background: #ECEFF1;">
      <!-- Cabeçalho -->
      <div style="padding: 16px; background: white; border-bottom: 1px solid #CFD8DC; font-weight: bold; color: #37474F;">
        💬 Chat com a BarryAI
      </div>

      <!-- Área de mensagens -->
      <div #chatContainer style="flex: 1; padding: 16px; overflow-y: auto; background: white;">
        <div *ngFor="let msg of mensagens" [style.margin-left]="msg.tipo === 'usuario' ? 'auto' : '0'" 
             [style.margin-right]="msg.tipo === 'ia' ? 'auto' : '0'"
             [style.background]="msg.tipo === 'usuario' ? '#3AAED8' : '#37474F'"
             [style.color]="'white'"
             style="max-width: 80%; padding: 12px 16px; border-radius: 18px; margin: 8px 0; font-size: 16px;">
          {{ msg.texto }}
          <div style="font-size: 12px; opacity: 0.8; text-align: right; margin-top: 4px;">
            {{ msg.data | date:'shortTime' }}
          </div>
        </div>
      </div>

      <!-- Área de entrada -->
      <div style="padding: 16px; background: white; border-top: 1px solid #CFD8DC; display: flex; gap: 8px;">
        <input [(ngModel)]="novaMensagem" 
               (keyup.enter)="enviar()" 
               placeholder="Pergunte algo à IA..." 
               style="flex: 1; padding: 12px; border: 1px solid #ccc; border-radius: 24px; font-size: 16px;" />
        <button (click)="enviar()" 
                style="background: #FFD700; color: black; border: none; padding: 12px 20px; border-radius: 24px; font-weight: bold; cursor: pointer;">
          Enviar
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class IaChatComponent implements OnInit, AfterViewInit {
  @ViewChild('chatContainer') chatContainer!: ElementRef;
  mensagens: any[] = [];
  novaMensagem = '';

  ngOnInit() {
    this.mensagens.push({
      texto: 'Olá! Sou a BarryAI. Como posso te ajudar hoje?',
      tipo: 'ia',
      data: new Date()
    });
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  enviar() {
    if (!this.novaMensagem.trim()) return;

    const msgUsuario = {
      texto: this.novaMensagem,
      tipo: 'usuario',
      data: new Date()
    };

    this.mensagens.push(msgUsuario);
    this.novaMensagem = '';
    this.scrollToBottom();

    // Simula resposta da IA após 1s
    setTimeout(() => {
      const respostas = [
        "Entendi sua pergunta! Vou te ajudar com isso.",
        "Essa é uma ótima pergunta. Aqui está a resposta:",
        "Você quer saber sobre isso? Claro, posso explicar!",
        "Vamos ver... A resposta mais simples é essa:"
      ];
      const respostaIA = respostas[Math.floor(Math.random() * respostas.length)];
      this.mensagens.push({
        texto: respostaIA,
        tipo: 'ia',
        data: new Date()
      });
      this.scrollToBottom();
    }, 1000);
  }

  private scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch {}
  }
}