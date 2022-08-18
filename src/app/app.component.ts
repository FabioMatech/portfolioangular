import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioangular';
  valor: any;
  destino: any;
  transferencia: any;

    transferir($event){
    console.log($event);
    this.transferencia = $event;
    this.LimparCampos();
  };

  LimparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
