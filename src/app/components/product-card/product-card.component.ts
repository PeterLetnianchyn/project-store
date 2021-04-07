import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  product = {
    id: 1,
    name: 'Tesla model X',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 933,
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
