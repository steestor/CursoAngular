import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../servicios/usuario/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuario= this.usuarioService.usuario;
  }

  cambiarNombre(){
    //this.usuario.nombre= 'Ana';
  }

}
