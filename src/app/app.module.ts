import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProgramasComponent } from './programas/programas.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NavbarfComponent } from './navbarf/navbarf.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    HistoriaComponent,
    QuienesSomosComponent,
    ProgramasComponent,
    ContactanosComponent,
    NavbarfComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
