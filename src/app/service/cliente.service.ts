import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL = 'https://novostalentos-brasil.azurewebsites.net/api/v1/clientes';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.apiURL);
  }
  saveCliente(cliente: Cliente){
    return this.http.post(this.apiURL, cliente);
  }

}
