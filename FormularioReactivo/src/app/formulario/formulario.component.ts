import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioCreado: FormGroup;
  usuarios: Array<Usuario> = new Array<Usuario>();
  esNuevo: boolean = true;
  posicionEditar: number = -1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formularioCreado = this.formBuilder.group(
      {
        nombre: ['Escribe un nombre', Validators.required],
        correo: ['', Validators.compose([
          Validators.required, Validators.email
        ])],
        password: ['', Validators.compose(
          [Validators.required, Validators.minLength(8)]
        )]
      }
    );
  }

  crear(){
    // muestra en objeto con todos los valores de los campos
    //console.log(this.formularioCreado.value);

    this.usuarios.push(this.formularioCreado.value as Usuario);
    //deja el formulario vacio una vez le hemos insertado los datos
    this.formularioCreado.reset();
  }

  editar(){
    this.usuarios[this.posicionEditar].nombre = this.formularioCreado.value.nombre;
    this.usuarios[this.posicionEditar].correo=  this.formularioCreado.value.correo;
    this.usuarios[this.posicionEditar].password= this.formularioCreado.value.password;

    this.esNuevo= true;
    this.formularioCreado.reset();
    this.posicionEditar=-1;
  }

  editarUsuario(posicion: number){
    this.formularioCreado.setValue({
      nombre: this.usuarios[posicion].nombre,
      correo: this.usuarios[posicion].correo,
      password: this.usuarios[posicion].password
    });
    this.posicionEditar = posicion;
    this.esNuevo = false;
  }

  eliminarUsuario(posicion: number){
    this.usuarios.splice(posicion,1);
  }
}
