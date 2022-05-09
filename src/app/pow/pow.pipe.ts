import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow',
})
export class PowPipe implements PipeTransform {
  transform(num: number, pow: number): number {
    return Math.pow(num, pow);
  }
}
