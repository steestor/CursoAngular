import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  pedido: Pedido = new Pedido();
  constructor() {}

  ngOnInit(): void {}

  agregarProducto() {
    this.pedido.pedidoDetalle.push({
      cantidad: 1,
      precio: 2,
      producto: 'Agua',
      total: 2,
    });

    Swal.fire({
      title: 'Producto agregado',
      text: 'Se agregó correctamente',
      icon: 'success',
    });
  }

  elHijoEliminoAlgo(event: any) {
    this.pedido.pedidoDetalle.splice(event.id, 1);
    console.log(event.id);
  }
}
