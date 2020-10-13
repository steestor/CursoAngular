import { Injectable } from '@angular/core';
import { Productos } from '../models/Productos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor() {}

  agregarLocalStorage(producto: Productos) {
    let productosAntiguos: Productos[] = this.productosLocalStorage;
    producto.productosID = productosAntiguos.length + 1;
    productosAntiguos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productosAntiguos));
  }

  get productosLocalStorage(): Productos[] {
    let productosDesdeLocalStorage: Productos[] = JSON.parse(
      localStorage.getItem('productos')
    );

    if (productosDesdeLocalStorage == null) {
      return new Array<Productos>();
    }
    return productosDesdeLocalStorage;
  }
}
