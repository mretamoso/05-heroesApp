import { Component, OnInit } from '@angular/core';
import { Publisher, RESTHeroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width:100%;
      border-radius:5px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: RESTHeroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''

  }

  constructor
    (
      private heroesService: HeroesService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroesPorId(id))
      )
      .subscribe(heroe => this.heroe = heroe)

  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //actualizar
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnakbar('Registro Actualizado'))
    } else {
      //crear nuevo registro
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id])
          this.mostrarSnakbar('Registro Creado')
        })
    }

  }

  eliminar() {

    this.heroesService.eliminarHeroe(this.heroe.id!)
      .subscribe(respuesta => {

        this.router.navigate(['/heroes'])
      })

  }

  mostrarSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    })
  }

}
