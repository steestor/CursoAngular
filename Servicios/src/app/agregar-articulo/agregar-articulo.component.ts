import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo';
import { user } from '../models/user';
import { ArticulosService } from '../servicios/articulos/articulos.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css']
})
export class AgregarArticuloComponent implements OnInit {

  usuarios: Array<user> = new Array<user>();
  formularioArticulo: FormGroup;
  articulo: Articulo = new Articulo();
  esNuevo: boolean;

  constructor(private articulosService: ArticulosService,
    private formbuilder: FormBuilder,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {

    this.esNuevo= JSON.parse(this.ruta.snapshot.params.esNuevo);
    console.log(this.esNuevo);

    this.articulosService.leerTodosLosUsuarios().subscribe( (users)=>{
      this.usuarios = users;
    });

    this.formularioArticulo =  this.formbuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    });

    if(!this.esNuevo){
      this.articulo = this.articulosService.articulo;
      this.formularioArticulo.setValue({
        title: this.articulo.title,
        body: this.articulo.body,
        userId: this.articulo.userId
      })
    }
  }

  agregar()
  {
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articulosService.guardarArticulo(this.articulo).subscribe( (articulo)=>{
    });
    this.formularioArticulo.reset();
  }

  editar(){
    // this.articulo = this.formularioArticulo.value as Articulo; perdemos el resto de valores por el camino
    this.articulo.body = this.formularioArticulo.value.body;
    this.articulo.title = this.formularioArticulo.value.title;
    this.articulo.id = this.formularioArticulo.value.id;
    this.articulo.userId = this.formularioArticulo.value.userId;

    this.articulosService.actualizarArticulo(this.articulo).subscribe((art)=>{
      console.log(art);
    } )
  }
}
