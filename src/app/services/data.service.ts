import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
/*  se crea para la logica del json y realizar peticiones http 
añadir a app.module el import http module*/
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  /* creo metodo para reoger la url por peticion */

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
