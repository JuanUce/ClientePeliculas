//importación de clases 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//rutas
import {Routes, RouterModule} from '@angular/router/'
import {FormsModule} from '@angular/forms'


//importación de componentes
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FormPeliculasComponent } from './peliculas/form-peliculas.component';

//configuración de rutas
const routes:Routes=[
  //mapeo index, mapea a la ruta principal
{path:'',redirectTo:'/peliculas',pathMatch:'full'},
//posterior a eso se mapea al componente ,(LOGICA DE NEGOCIO)
{path:'peliculas',component:PeliculasComponent},
//posterior apunta al form o VISTA
{path:'peliculas/form',component:FormPeliculasComponent},

{path:'peliculas/form/:id',component:FormPeliculasComponent},


]



@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    FormPeliculasComponent,
  ],
  //se importa las librerias y componentes
  imports: [
    BrowserModule,
    HttpClientModule,
    //se importa para que la aplicación tome estas rutas
    RouterModule.forRoot(routes),
   //para trabajar con Formularios
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
