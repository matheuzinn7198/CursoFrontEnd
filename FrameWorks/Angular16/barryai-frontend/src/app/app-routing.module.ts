// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteGuard } from './core/auth/guards/cliente.guard';
import { ClientePlusGuard } from './core/auth/guards/cliente-plus.guard';
import { AdminGuard } from './core/auth/guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cliente',
    canActivate: [ClienteGuard],
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'plus',
    canActivate: [ClientePlusGuard],
    loadChildren: () => import('./cliente-plus/cliente-plus.module').then(m => m.ClientePlusModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }