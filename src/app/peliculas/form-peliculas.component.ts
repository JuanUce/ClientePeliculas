import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
import { PeliculaService } from './pelicula.service';
import {Router,ActivatedRoute} from '@Angular/router/'

@Component({
  selector: 'app-form-peliculas',
  templateUrl: './form-peliculas.component.html',
  styleUrls: ['./form-peliculas.component.css']
})
export class FormPeliculasComponent implements OnInit {

//declarar un objeto pelicula para vincularlo con la Vista esto es para crear
pelicula:Pelicula=new Pelicula();
//Titulo del formulario
titulo:string="FORMULARIO DE PELICULAS"


//PeliculaService nos conectamos al API,   para volver al a pagina de listar
  constructor(private peliculaservice:PeliculaService, private router:Router ,private activateRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activateRoute.params.subscribe(
    e=>{
       let id=e['id'];

       if(id){

        this.peliculaservice.get(id).subscribe(
          es=>this.pelicula=es

        );
       }

    }
    )
  }


    create(): void{

      console.log(this.pelicula);
      this.peliculaservice.create(this.pelicula).subscribe(
        //en Typescrip funciones de fecha
        
        res=>this.router.navigate(['/peliculas'])
        )
  }

 update(): void{

  this.peliculaservice.update(this.pelicula).subscribe(
    //en Typescrip funciones de fecha
    res=>this.router.navigate(['/peliculas'])
    )
 }




}
