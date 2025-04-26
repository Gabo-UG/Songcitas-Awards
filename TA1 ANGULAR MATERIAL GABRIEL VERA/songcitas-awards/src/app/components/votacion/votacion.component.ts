import { Component } from '@angular/core';
import { Cancion } from '../../models/Cancion';
import { CancionesService } from '../../services/canciones.service';
import { UpperCasePipe } from '@angular/common';
import { DuracionPipe } from '../../pipes/duracion.pipe';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-votacion',
  imports: [UpperCasePipe, DuracionPipe ,
    MatCardModule, MatIconModule],
  templateUrl: './votacion.component.html',
  styleUrl: './votacion.component.css'
})
export class VotacionComponent {

  title:string ="Lista de Canciones Nominadas";
  canciones:Cancion[]=[];

  constructor(private miservicio:CancionesService){

  }

  ngOnInit(): void {
    this.getCanciones();
    console.log(this.canciones[0]);
    
  }

    //metodo para obtener las peliculas del servicio
  getCanciones():void{
    this.miservicio.obtenerCanciones().subscribe(data => {
      this.canciones = data;
    });
  }

  votar(cancion: Cancion): void {
    if (!cancion.yaVotado) {
      cancion.votos++;
      cancion.yaVotado = true;
      alert(`¡Votaste por ${cancion.titulo} de ${cancion.artista}!`);
    } else {
      alert("¡Ya votaste por esta canción!");
    }
  }

  //este metodo lo implemente para poder verificar en consola por que pelicula he pasado el mouse, ya que me parecio interesante
  mostrarInfo(cancion: Cancion): void {
    console.log(`Pasaste el mouse por: ${cancion.titulo}`);
  }
  desactivar(img: HTMLImageElement) {
    img.classList.remove("activa");   
  }
  activar(img: HTMLImageElement) {
    img.classList.add("activa");   
  }
  reiniciarVotos(cancion: Cancion): void {
    cancion.votos = 0;
    cancion.yaVotado = false;
    console.log(`Votos de ${cancion.titulo} reiniciados.`);
  }
}
