import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteRoutingModule } from './cliente-routing.module';
import { IaChatComponent } from './ia-chat/ia-chat.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [IaChatComponent, PerfilComponent],
  imports: [CommonModule, FormsModule, ClienteRoutingModule]
})
export class ClienteModule { }