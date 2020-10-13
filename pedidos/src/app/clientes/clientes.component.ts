import { Component, OnInit } from '@angular/core';
import { Clientes } from '../models/Clientes';
import { Productos } from '../models/Productos';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>();

  constructor() {}

  ngOnInit(): void {
    let clientesAgregar: Array<Clientes> = new Array<Clientes>();
    clientesAgregar.push(
      {
        clientesID: 4,
        nombre: 'Camen',
        apellido: 'Najera',
        direccion: 'Avenida lelo',
      },
      {
        clientesID: 5,
        nombre: 'Alejandro',
        apellido: 'Pineda',
        direccion: 'textil 18',
      }
    );
    this.productos.push(
      {
        productosID: 1,
        nombre: 'Maíz',
        precio: 15,
        descripcion: 'prueba',
      },
      {
        productosID: 2,
        nombre: 'Agua en botella',
        precio: 20,
        descripcion: 'prueba',
      }
    );
  }

  guardarClientes() {
    let clientesAgregar: Array<Clientes> = new Array<Clientes>();
    clientesAgregar.push(
      {
        clientesID: 1,
        nombre: 'Maria',
        apellido: 'Perez',
        direccion: 'Calle sexta',
      },
      {
        clientesID: 2,
        nombre: 'Ana',
        apellido: 'Martinez',
        direccion: 'Avenida Quinta',
      }
    );
    localStorage.setItem('clientes', JSON.stringify(clientesAgregar));
  }

  guardarProductos() {
    //localStorage.setItem('productos', JSON.stringify(this.productos));
    let productosAgregar: Array<Productos> = new Array<Productos>();
    productosAgregar.push(
      {
        productosID: 3,
        nombre: 'Aceite',
        precio: 6,
        descripcion: 'prueba',
      },
      {
        productosID: 4,
        nombre: 'Atún',
        precio: 3,
        descripcion: 'prueba',
      }
    );
    localStorage.setItem('productos', JSON.stringify(productosAgregar));
  }

  /*leer() {
    this.clientes = JSON.parse(localStorage.getItem('clientes'));
    this.productos = JSON.parse(localStorage.getItem('productos'));
  }*/

  eliminarClientes() {
    localStorage.removeItem('clientes');
  }

  eliminarProductos() {
    localStorage.removeItem('productos');
  }

  eliminarTodos() {
    localStorage.clear();
  }

  get ClientesLocales(): Clientes[] {
    let clientesLocalStorage: Clientes[] = JSON.parse(
      localStorage.getItem('clientes')
    );
    if (clientesLocalStorage == null) {
      return new Array<Clientes>();
    }
    return clientesLocalStorage;
  }

  get ProductosLocales(): Productos[] {
    let productosLocalStorage: Productos[] = JSON.parse(
      localStorage.getItem('productos')
    );
    if (productosLocalStorage == null) {
      return new Array<Productos>();
    }
    return productosLocalStorage;
  }
}
