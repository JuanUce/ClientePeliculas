import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
import { PeliculaService } from './pelicula.service';
//La logia de negocio
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
//Titulo del formulario
 titulo:string="Lista de estudiantes"

//declaración de una variable
pelicula:Pelicula[];

//lamamos a nuestro servicio se declara en el constructor es algo asi como inyeccion de dependencias
  constructor(private peliculaservice:PeliculaService ) { }

  ngOnInit(): void {
//subcribe: para conectarnos y retornar los datos
    this.peliculaservice.getall().subscribe(
    //en Typescrip funciones de flecha
      estu => this.pelicula=estu

    )
  }
  delete(pelicu:Pelicula): void{
    console.log("Boton delete");
    this.peliculaservice.delete(pelicu.id).subscribe(
      res => this.peliculaservice.getall().subscribe(
     response =>this.pelicula=response
      )
    )
  
   }
  

}
