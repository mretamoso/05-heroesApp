import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { RESTHeroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card{
      margin-top:20px;
    }
  `
  ]
})
export class ListadoComponent implements OnInit {

  heroes: RESTHeroe[] = []

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void { //TODO llamamos metodo get luego de importar nuestro servicio :D

    this.heroesService.getHeroes()//TODO obteniendo la respuesta del GET heroes :D
      .subscribe(heroes => this.heroes = heroes) //TODO 
  }

}
