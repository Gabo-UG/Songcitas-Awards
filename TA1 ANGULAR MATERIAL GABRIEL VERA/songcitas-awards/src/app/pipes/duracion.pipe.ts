import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duracion'
})
export class DuracionPipe implements PipeTransform {

  transform(segundos: number): string {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${min}:${seg.toString().padStart(2, '0')} min`;
  }

}
