import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  datosCorrectos: boolean = true;
  campoNoValido: boolean = true;
  mensajeError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ingresar() {
    // Este método es una promesa, es decir cuando se acabe de ejecutar este nos devolverá un usuario
    if (this.formularioLogin.valid) {
      this.datosCorrectos = true;
      this.afAuth.auth
        .signInWithEmailAndPassword(
          this.formularioLogin.value.email,
          this.formularioLogin.value.password
        )
        .then((usuario) => {
          console.log(usuario);
        })
        .catch((e) => {
          this.datosCorrectos = false;
          this.mensajeError = e.message;
          console.log(this.mensajeError);
        });
    } else {
      this.datosCorrectos = false;
      this.mensajeError =
        'Se ha producido un error. Revisa que los datos sean correctos';
    }
  }
}
