import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor() {}

  // Exibir uma mensagem de sucesso
  sucesso(mensagem: string) {
    alert('✅ Sucesso: ' + mensagem);
  }

  // Exibir uma mensagem de erro
  erro(mensagem: string) {
    alert('❌ Erro: ' + mensagem);
  }

  // Exibir uma mensagem de aviso
  aviso(mensagem: string) {
    alert('⚠️ Aviso: ' + mensagem);
  }
}