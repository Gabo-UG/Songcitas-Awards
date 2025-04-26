import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cancion } from '../models/Cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {
  private jsonUrl:string= "../json/datos.json";

  constructor(private http:HttpClient) { 
  }
 
  obtenerCanciones():Observable<Cancion[]>{
    return this.http.get<Cancion[]>(this.jsonUrl);
  }
}

