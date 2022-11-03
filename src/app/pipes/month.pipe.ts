import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  static readonly MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  transform(value: number): string {
    if (value>0 && value<13) {
      return MonthPipe.MONTH_NAMES[value-1];
    }
    return '';
  }

}
