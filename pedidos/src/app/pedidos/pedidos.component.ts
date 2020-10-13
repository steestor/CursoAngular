import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  constructor(public pedidoService: PedidosService) {}

  ngOnInit(): void {}

  calcularTotal(index: number) {
    this.pedidoService.pedido.actualizarCantidades(index);
    this.pedidoService.guardarLocalStorage();
  }

  guardar() {
    this.pedidoService.guadarPedido();
  }

  eliminar(index: number) {
    this.pedidoService.pedido.pedidoDetalle.splice(index, 1);
    this.pedidoService.guardarLocalStorage();
  }
}
