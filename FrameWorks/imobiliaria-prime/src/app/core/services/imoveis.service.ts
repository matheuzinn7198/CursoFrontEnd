import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  private imoveis: any[] = []; // lista de imóveis em memória

  constructor() {
    // simulação: começa com alguns imóveis
    this.imoveis = [
      { id: 1, titulo: 'Apartamento no Centro', preco: 250000, corretorId: 1 },
      { id: 2, titulo: 'Casa com quintal', preco: 400000, corretorId: 2 }
    ];
  }

  // Buscar todos imóveis
  listar() {
    return this.imoveis;
  }

  // Buscar imóvel pelo id
  buscarPorId(id: number) {
    return this.imoveis.find(imovel => imovel.id === id);
  }

  // Criar um novo imóvel
  criar(imovel: any) {
    imovel.id = this.imoveis.length + 1; // gera id simples
    this.imoveis.push(imovel);
    return imovel;
  }

  // Atualizar imóvel
  atualizar(id: number, dados: any) {
    const index = this.imoveis.findIndex(i => i.id === id);
    if (index !== -1) {
      this.imoveis[index] = { ...this.imoveis[index], ...dados };
      return this.imoveis[index];
    }
    return null;
  }

  // Excluir imóvel
  excluir(id: number) {
    this.imoveis = this.imoveis.filter(i => i.id !== id);
  }
}