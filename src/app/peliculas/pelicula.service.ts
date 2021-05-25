import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from './pelicula';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
//Drección del API a la cual vamos a consumir
private url:string="http://localhost:8090/SpringCrudApi/api/peliculas";

//aquellas clases externas que utilizamos para conectarnos a la API se declara dentro del constructor
  constructor( private http:HttpClient ) { }

  //Obtener Peliculas
  getall() :Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.url);
  }
  //crear peliculas

  create(peli:Pelicula):Observable<Pelicula>{
    return this.http.post<Pelicula>(this.url,peli);
  }

    //Obtener Peliculas by ID
    get(id:number) :Observable<Pelicula>{
      return this.http.get<Pelicula>(this.url+'/'+id);
    }
//actualizar
    update(peli:Pelicula):Observable<Pelicula>{
      return this.http.put<Pelicula>(this.url,peli);
    }
//eliminar
    delete(id:number):Observable<Pelicula>{
      return this.http.delete<Pelicula>(this.url+'/'+id);
    }

}
