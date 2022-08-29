import { TransferenciaService } from './transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioangular';

  constructor(private service: TransferenciaService){  }

    transferir($event){
    this.service.adicionar($event);


  };


}
