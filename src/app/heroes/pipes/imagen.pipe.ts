import { Pipe, PipeTransform } from '@angular/core';
import { RESTHeroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
  // pure: false//TODO para este caso el argumento que esta en el transform no se cambia porque es un objeto
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: RESTHeroe): string {

    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png'
    } else if (heroe.alt_img) {
      return heroe.alt_img
    } else {
      return `assets/heroes/${heroe.id}.jpg`
    }



  }
}
