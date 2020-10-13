import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoDetalle } from '../models/pedido-detalle';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.css'],
})
export class PedidoDetalleComponent implements OnInit {
  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>();
  @Output() seEliminoUnProducto = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  eliminar(index: number) {
    this.seEliminoUnProducto.emit({
      id: index,
    });

    Swal.fire({
      title: 'Producto eliminado',
      text: 'Se aliminó un producto',
      icon: 'warning',
    });
  }
}
