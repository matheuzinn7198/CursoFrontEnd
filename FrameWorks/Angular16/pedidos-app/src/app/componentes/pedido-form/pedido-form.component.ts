import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Pedido } from 'src/app/models/pedido.model';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
  public clientes: Cliente[] = [];
  public produtos: Produto[] = [];
  clienteSelecionadoId = "";
  produtosSelecionadosId: string[] = [];
  desconto = 0;

  constructor(private dadosService: DadosService){
    this.clientes = dadosService.getClientes();
    this.clientes = dadosService.getProdutos();
  }

  //métodos
  //selecionar os produtos
  selecionarProdutos(id: string){
    const index = this.produtosSelecionadosId.indexOf(id);
    if(index < 0){ //index >=0 o produto foi selecionado
      this.produtosSelecionadosId.push(id); //adiciona o produto selecionado
    } else {
      this.produtosSelecionadosId.splice(index,1); //remove o produto não selecionado
    }
  }

  salvarPedido(){
    const cliente = this.clientes.find(c => c.id.toString() === this.clienteSelecionadoId);
    const produtos = this.produtos.filter(
      p => this.produtosSelecionadosId.includes(p.id.toString())
    );
    if(!cliente || produtos.length === 0){
      alert("Selecione um cliente e pelo menos um produto");
      return;
    } else{
      const pedido = new Pedido(
        this.dadosService.getPedidos().length +1,
        cliente,
        produtos,
        this.desconto
      );
      this.dadosService.adicionarPedidos(pedido);
      this.clienteSelecionadoId = "";
      this.produtosSelecionadosId = [];
      this.desconto = 0;
      alert("Pedido Criado com Sucesso!");
    }
  }
}
