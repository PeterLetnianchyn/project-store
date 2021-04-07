import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  constructor(){}
  transform(value: number, price: number): number {
    const res = value / price ;
    return 1 - res;
  }

}
