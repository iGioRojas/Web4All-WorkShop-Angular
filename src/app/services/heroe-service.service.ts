import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeServiceService {

  constructor(private http:HttpClient) {
   }

  getAll():Observable<Heroe[]>{
    return this.http.get<Heroe[]>("https://akabab.github.io/superhero-api/api/all.json")
  }
}
