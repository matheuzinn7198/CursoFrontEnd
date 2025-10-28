import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IaChatComponent } from './ia-chat/ia-chat.component';      // ← pasta/ia-chat.component
import { PerfilComponent } from './perfil/perfil.component';        // ← pasta/perfil.component

const routes: Routes = [
  { path: 'chat', component: IaChatComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: 'chat', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }