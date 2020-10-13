import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { Usuario } from '../models/usuario';
import { ArticulosService } from '../servicios/articulos/articulos.service';
import { UsuarioService } from '../servicios/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario=  new Usuario();
  articulo: Articulo;
  articulos: Array<Articulo> = new Array<Articulo>();

  constructor( private usuarioService: UsuarioService,
    private articulosService: ArticulosService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    this.articulosService.leerNoticias().subscribe((articulosDesdeApi) => {
      this.articulos = articulosDesdeApi
    });
    console.log(this.articulos);


  let articuloEnviar: Articulo= new Articulo();
  articuloEnviar.body= 'Este es el body del articulo';
  articuloEnviar.title= 'Este es el title';
  articuloEnviar.userId=1;
  this.articulosService.guardarArticulo(articuloEnviar).subscribe((articuloCreado) => {
  this.articulos.push(articuloCreado)
  });
  }

  irAlDetalle(art: Articulo){
    this.articulosService.articulo = art;
    this.router.navigateByUrl('/articulo-detalle');
  }

  borrarArticulo(id: number){
    this.articulosService.borrarArticulo(id).subscribe( (any)=>{
      console.log(any)
    });
  }

  actualizar(articulo: Articulo){
    this.articulosService.articulo = articulo;
    this.router.navigateByUrl('/agregar-articulo/false');

    /*
    this.articulo.title='Modificado';
    this.articulo.body='Modificado'

    this.articulosService.actualizarArticulo(articulo).subscribe((articulo) => 
    {
      console.log(articulo);
    })
    */
  }
}
