import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { AngularFireAuth } from "angularfire2/auth";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Translation
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslationComponent } from "./translation/translation.component";
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TranslationComponent,
    EncabezadoComponent,
    ListadoClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
