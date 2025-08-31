// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from './core/guards/auth.guard';
import { CorretorGuard } from './core/guards/corretor.guard';

const routes: Routes = [
  // Área pública (home e busca de imóveis)
  {
    path: '',
    loadChildren: () =>
      import('./views/public/public.module').then(m => m.PublicModule)
  },

  // Área do cliente (interesses)
  {
    path: 'cliente',
    canActivate: [AuthGuard], // só acessa logado
    loadChildren: () =>
      import('./views/cliente/cliente.module').then(m => m.ClienteModule)
  },

  // Área do corretor (dashboard de imóveis)
  {
    path: 'corretor',
    canActivate: [AuthGuard, CorretorGuard], // precisa estar logado e ser corretor
    loadChildren: () =>
      import('./views/corretor/corretor.module').then(m => m.CorretorModule)
  },

  // Se não encontrar rota, redireciona para home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
