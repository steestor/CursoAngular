import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../models/Clientes';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();

  constructor(
    public clientesService: ClientesService,
    public PedidosService: PedidosService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.clientes = this.clientesService.clientesLocalStorage;
  }

  buscarClientes(event) {
    let nombreBuscar: string = event.target.value;
    this.clientes = this.clientesService.clientesLocalStorage.filter((x) => {
      return x.nombre.toLowerCase().includes(nombreBuscar.toLowerCase());
    });
  }

  irAProductos(cliente: Clientes) {
    this.PedidosService.pedido.clienteID = cliente.clientesID;
    this.PedidosService.pedido.nombreCliente =
      cliente.nombre + ' ' + cliente.apellido;
    this.PedidosService.guardarLocalStorage();
    this.router.navigateByUrl('/productos');
  }
}
