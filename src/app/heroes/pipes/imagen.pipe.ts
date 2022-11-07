import { Pipe, PipeTransform } from '@angular/core';
import { RESTHeroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: RESTHeroe): string {
    return `
    assets/heroes/${heroe.id}.jpg
    `;
  }

}
