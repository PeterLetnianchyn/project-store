import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product?: Product;
  @Output() deleteClicked = new EventEmitter<any>();
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
  }

  addToCard(product: Product): void {
    console.log('This product', product , 'Will be added to cart');
    this.cartService.cart.push(product);
  }

  deleteProduct(product: Product): void {
    this.deleteClicked.emit(product);
  }

}
