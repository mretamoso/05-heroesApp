import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RESTHeroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  // heroe!:RESTHeroe

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({id}) => console.log(id))

  }

}
