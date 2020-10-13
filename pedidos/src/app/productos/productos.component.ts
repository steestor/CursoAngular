import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Productos } from '../models/Productos';
import { PedidosService } from '../services/pedidos.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>();

  constructor(
    public productoService: ProductosService,
    public pedidosService: PedidosService,
    public notificationService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.productos = this.productoService.productosLocalStorage;
  }

  buscarProductos(event) {
    let nombreBuscar: string = event.target.value;
    this.productos = this.productoService.productosLocalStorage.filter((x) => {
      return x.nombre.toLowerCase().includes(nombreBuscar.toLowerCase());
    });
  }

  agregar(producto: Productos) {
    this.pedidosService.pedido.agregarProducto(producto);
    this.pedidosService.guardarLocalStorage();
    this.onSucess('Producto añadido al carrito');
  }

  onSucess(message) {
    this.notificationService.success('Añadido al carrito', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'false',
      showProgressBar: true,
    });
  }

  onError(message) {
    this.notificationService.error('Ha ocurrido un error', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'false',
      showProgressBar: true,
    });
  }
}
