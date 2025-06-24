import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';

import { VagasComponent } from './views/vagas/vagas.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { FormsModule } from '@angular/forms';

import { CurriculoListComponent } from './views/curriculo-list/curriculo-list.component';
import { PainelCurriculoComponent } from './views/painel-curriculos/painel-curriculos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CurriculoListComponent,
    VagasComponent,
    HomeComponent,
    PainelVagasComponent,
  PainelCurriculoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
