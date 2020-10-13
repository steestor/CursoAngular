import { Injectable } from '@angular/core';
import { Pedido } from '../models/Pedido';
import { PedidoDetalle } from '../models/PedidoDetalle';
import { Productos } from '../models/Productos';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  pedido: Pedido = new Pedido();
  constructor() {
    this.pedido = this.ultimoPedido;
  }

  guardarLocalStorage() {
    localStorage.setItem('ultimoPedido', JSON.stringify(this.pedido));
  }

  get ultimoPedido(): Pedido {
    let pedidoLocalStorage: Pedido = new Pedido(
      JSON.parse(localStorage.getItem('ultimoPedido'))
    );
    if (pedidoLocalStorage == null) {
      return new Pedido();
    }
    return pedidoLocalStorage;
  }

  guadarPedido() {
    let listadoPedidos: Pedido[] = new Array<Pedido>();
    listadoPedidos = this.listadoPedidosLocalStorage;
    this.pedido.pedidoID = listadoPedidos.length + 1;
    listadoPedidos.push(this.pedido);
    localStorage.setItem('pedidos', JSON.stringify(listadoPedidos));
    //localStorage.removeItem('ultimoPedido');
    this.pedido = new Pedido(null);
  }

  get listadoPedidosLocalStorage(): Pedido[] {
    let pedidos: Pedido[] = JSON.parse(localStorage.getItem('pedidos'));
    if (pedidos == null) {
      return new Array<Pedido>();
    }
    return pedidos.sort((a, b) => a.pedidoID - b.pedidoID);
  }
}
