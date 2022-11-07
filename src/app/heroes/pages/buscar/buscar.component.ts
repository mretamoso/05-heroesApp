import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { RESTHeroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: RESTHeroe[] = []
  heroeSeleccionado!:RESTHeroe

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getSugerencias(this.termino)
      .subscribe(heroes => this.heroes = heroes)
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const heroe: RESTHeroe = event.option.value;
    this.termino= heroe.superhero

    this.heroesService.getHeroesPorId(heroe.id!) //TODO siempre va a tener un valor 
    .subscribe(heroe => this.heroeSeleccionado = heroe)
  }
}
