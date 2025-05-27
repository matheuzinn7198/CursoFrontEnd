import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  nome: string = "";
  quantidadeClientes: number = 0; // nova propriedade

  constructor(private dadosService: DadosService){
    this.atualizarQuantidadeClientes();
  }

  salvarCliente(){
    const cliente = new Cliente(
      this.dadosService.getClientes().length+1,
      this.nome
    );
    this.dadosService.adicionarClientes(cliente);
    this.nome="";
    this.atualizarQuantidadeClientes();
    alert(`Cliente Adicionado com Sucesso! Agora há ${this.quantidadeClientes} clientes.`);
  }

  atualizarQuantidadeClientes() {
    this.quantidadeClientes = this.dadosService.getClientes().length;
  }
}