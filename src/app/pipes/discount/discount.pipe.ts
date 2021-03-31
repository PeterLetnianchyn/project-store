import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  constructor(private currency: CurrencyPipe){}
  transform(value: number, price: number): unknown {
    const res = value / price * 100;
    return `${this.currency.transform(value, 'USD')} ${100 - res}% Sale`;
  }

}
