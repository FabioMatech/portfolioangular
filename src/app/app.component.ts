import { TransferenciaService } from './transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioangular';
  transferencias: any[] = [];

  constructor(private service: TransferenciaService){

  }

  
}
