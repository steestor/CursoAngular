import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  datosCorrectos: boolean = true;
  campoNoValido: boolean = true;
  mensajeError: string = "";
  mensajeError1: string = "";
  mensajeError2: string = "";
  public activeLang = "es";

  constructor(
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([Validators.required])],
    });

    this.translate.setDefaultLang(this.activeLang);
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
          // console.log(usuario);
        })
        .catch((e) => {
          this.datosCorrectos = false;
          if (e.code === "auth/user-not-found") {
            this.mensajeError1 = e.message;
            this.mensajeError2 = "";
            this.mensajeError = "";
          } else {
            this.mensajeError2 = e.message;
            this.mensajeError1 = "";
            this.mensajeError = "";
          }
        });
    } else {
      this.datosCorrectos = false;
      this.mensajeError =
        "Se ha producido un error. Revisa que los datos sean correctos";
      this.mensajeError1 = "";
      this.mensajeError2 = "";
    }
  }
}
