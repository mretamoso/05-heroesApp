import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTHeroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { } //TODO se crea http con httpclient ya importado previamente

  getHeroes(): Observable<RESTHeroe[]> { //TODO se indica que es de tipo observable de nombre heroe
    return this.http.get<RESTHeroe[]>('http://localhost:3000/heroes')
  }

  getHeroesPorId(id: string): Observable<RESTHeroe> { //TODO se indica que es de tipo observable de nombre heroe
    return this.http.get<RESTHeroe>(`http://localhost:3000/heroes/${id}`)
  }
}
