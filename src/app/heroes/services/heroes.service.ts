import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTHeroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseurl

  constructor(private http: HttpClient) { } //TODO se crea http con httpclient ya importado previamente

  getHeroes(): Observable<RESTHeroe[]> { //TODO se indica que es de tipo observable de nombre heroe
    return this.http.get<RESTHeroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroesPorId(id: string): Observable<RESTHeroe> { //TODO se indica que es de tipo observable de nombre heroe
    return this.http.get<RESTHeroe>(`${this.baseUrl}/heroes/${id}`)
  }

  getSugerencias(termino: string): Observable<RESTHeroe[]> {
    return this.http.get<RESTHeroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`)
  }

  agregarHeroe(heroe: RESTHeroe): Observable<RESTHeroe> {
    return this.http.post<RESTHeroe>(`${this.baseUrl}/heroes`, heroe)
  }
  
  actualizarHeroe(heroe: RESTHeroe): Observable<RESTHeroe> {
    return this.http.put<RESTHeroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }
}
