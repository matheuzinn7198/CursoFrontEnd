import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './templates/components/navbar/navbar.component';
import { FooterComponent } from './templates/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Navbar/Footer são standalone por padrão nas versões novas.
    // Se não forem, adicione-os em "declarations" e remova daqui.
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
