import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MasterGym';

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario) => {
      console.log(usuario);
    });
  }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(
      'usuarioprueba@gmail.com',
      'usuarioprueba'
    );
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
