import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FooterComponent } from './footer/footer.component';
import { ExtratoComponent } from './extrato/extrato.component';



@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    HeaderComponent,
    ExtratoComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
