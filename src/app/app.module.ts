import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';



@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
