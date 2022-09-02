import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from './models/transferencia.models';
@Injectable({
  providedIn: 'root'
})


@Injectable()

export class TransferenciaService {
  private listatransferencia: any[];
  private url = "http://localhost:3000/transferencias"


constructor(private httpClient: HttpClient) {
  this.listatransferencia = [];

    constructor() {
  this.listatransferencia = []

}

  get transferencias(){
    return this.listatransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia)
    this.listatransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date;


  }
}
