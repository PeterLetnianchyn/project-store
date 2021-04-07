import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable()
export class CartService {

cart: Product[] = [];

  constructor() {}
}
