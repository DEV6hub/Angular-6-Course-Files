import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shirtFilter'
})
export class ShirtFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
