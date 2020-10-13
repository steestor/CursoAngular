import { PedidoDetalle } from './PedidoDetalle';
import { Productos } from './Productos';

export class Pedido {
  pedidoID: number;
  clienteID: number;
  nombreCliente: string;
  totalPedido: number;
  pedidoDetalle: Array<PedidoDetalle>;

  constructor(datos?: Pedido) {
    if (datos != null) {
      this.pedidoID = datos.pedidoID;
      this.clienteID = datos.clienteID;
      this.nombreCliente = datos.nombreCliente;
      this.pedidoDetalle = datos.pedidoDetalle;
      this.totalPedido = datos.totalPedido;
      return;
    }
    this.pedidoID = this.pedidoID;
    this.clienteID = this.clienteID;
    this.nombreCliente = this.nombreCliente;
    this.totalPedido = this.totalPedido;
    this.pedidoDetalle = new Array<PedidoDetalle>();
  }

  agregarProducto(producto: Productos) {
    let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
    pedidoDetalle.cantidad = 1;
    pedidoDetalle.nombreProducto = producto.nombre;
    pedidoDetalle.precio = producto.precio;
    pedidoDetalle.productoID = producto.productosID;
    pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;

    let existe: number = this.pedidoDetalle.filter(
      (x) => x.productoID == producto.productosID
    ).length;

    if (existe > 0) {
      let index: number = this.pedidoDetalle.findIndex(
        (x) => x.productoID == producto.productosID
      );
      this.pedidoDetalle[index].cantidad++;
      this.pedidoDetalle[index].total =
        this.pedidoDetalle[index].cantidad * this.pedidoDetalle[index].precio;
    } else {
      this.pedidoDetalle.push(pedidoDetalle);
    }
    this.actualizarTotal();
  }

  private actualizarTotal() {
    this.totalPedido = 0;
    for (let producto of this.pedidoDetalle) {
      this.totalPedido = this.totalPedido + producto.total;
    }

    /* LO MISMO
    this.pedidoDetalle.forEach((producto) => {
      this.totalPedido = this.totalPedido + producto.total;
    });*/
  }

  public actualizarCantidades(index: number) {
    this.pedidoDetalle[index].total =
      this.pedidoDetalle[index].precio * this.pedidoDetalle[index].cantidad;
    this.actualizarTotal();
  }
}
