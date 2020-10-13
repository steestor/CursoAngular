import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulo: Articulo =  new Articulo();
  ruta: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { 
  }

  leerNoticias() : Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.ruta + '/posts')
  }

  leerUsuario(userId: number): Observable<user>
  {
    return this.http.get<user>(this.ruta + '/users/' + userId);
  }

  guardarArticulo(articulo: Articulo): Observable<Articulo>
  {
    return this.http.post<Articulo>(this.ruta + '/posts', articulo);
  }

  leerTodosLosUsuarios(): Observable<user[]>
  {
    return this.http.get<user[]>(this.ruta + '/users');
  }

  borrarArticulo(id: number): Observable<any>
  {
    return this.http.delete<any>(this.ruta + '/posts/' + id);
  }

  actualizarArticulo(articulo: Articulo): Observable<Articulo>
  {
    return this.http.put<Articulo>(this.ruta + '/posts/' + articulo.id, articulo);
  }
}
