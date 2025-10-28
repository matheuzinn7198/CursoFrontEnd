import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // ← Importe a Home

import { AuthGuard } from './core/auth/guards/auth.guard';
import { ClienteGuard } from './core/auth/guards/cliente.guard';
import { ClientePlusGuard } from './core/auth/guards/cliente-plus.guard';
import { AdminGuard } from './core/auth/guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent }, // ← HOME como rota principal!

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cliente',
    canActivate: [AuthGuard, ClienteGuard],
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'plus',
    canActivate: [AuthGuard, ClientePlusGuard],
    loadChildren: () => import('./cliente-plus/cliente-plus.module').then(m => m.ClientePlusModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '' } // ← Volta para Home em rotas inválidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }