import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { user } from '../models/user';
import { ArticulosService } from '../servicios/articulos/articulos.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  articulo: Articulo;
  usuario: user = new user();

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.articulo = this.articulosService.articulo;
    this.articulosService.leerUsuario(this.articulo.id).subscribe( (usuarioApi) => {
      this.usuario = usuarioApi;
    });
  }

}
