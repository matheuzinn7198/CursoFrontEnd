// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // importa o módulo de rotas
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // declara o componente raiz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // importa o sistema de rotas
  ],
  providers: [],
  bootstrap: [AppComponent] // define o AppComponent como inicial
})
export class AppModule { }
