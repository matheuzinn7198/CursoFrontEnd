import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminGuard } from './auth/guards/admin.guard';
import { ClienteGuard } from './auth/guards/cliente.guard';
import { ClientePlusGuard } from './auth/guards/cliente-plus.guard';

@NgModule({
  imports: [CommonModule],
  providers: [
    AuthService,
    AuthGuard,
    AdminGuard,
    ClienteGuard,
    ClientePlusGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }