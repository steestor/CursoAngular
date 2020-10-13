import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario = new Usuario();
  constructor() { 
    this.usuario.nombre= 'Stella',
    this.usuario.apellido= 'Esparza',
    this.usuario.password= '1234',
    this.usuario.usuarioId = 1
  }
}
