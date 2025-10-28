import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // ← Importe aqui

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent // ← Declare aqui
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }