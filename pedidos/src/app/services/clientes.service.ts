import { Injectable } from '@angular/core';
import { Clientes } from '../models/Clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor() {}

  agregarLocalStorage(cliente: Clientes) {
    let clientesAntiguos: Clientes[] = this.clientesLocalStorage;
    cliente.clientesID = clientesAntiguos.length + 1;
    clientesAntiguos.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientesAntiguos));
  }

  get clientesLocalStorage(): Clientes[] {
    let clientesDesdeLocalStorage: Clientes[] = JSON.parse(
      localStorage.getItem('clientes')
    );

    if (clientesDesdeLocalStorage == null) {
      return new Array<Clientes>();
    }
    return clientesDesdeLocalStorage;
  }
}
