import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  product = {
    id: 1,
    name: 'APPLE iPhone 12 Pro Max',
    description: 'Best Device Ever',
    stats: {},
    category: 'Mobile Phones',
    brand: 'Apple',
    img: 'https://i.eldorado.ua/goods_images/1038946/6792883-1602620087.jpg',
    price: 1000,
    salePrice: 950,
    status: 'in stock',
    dateCreated: new Date()
  };
  constructor() { }

  ngOnInit(): void {
  }

  addToCard(product: any): void {
    console.log('This product', product , 'Will be added to cart');
  }

}
