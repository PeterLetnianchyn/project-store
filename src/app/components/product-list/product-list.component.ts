import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [{
    id: 1,
    name: 'Tesla model x 1',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: true,
    dateCreated: new Date()
  }, {
    id: 2,
    name: 'Tesla model x 2',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: true,
    dateCreated: new Date()
  }, {
    id: 3,
    name: 'Tesla model x 3',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: true,
    dateCreated: new Date()
  }, {
    id: 4,
    name: 'Tesla model x 4',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: true,
    dateCreated: new Date()
  }, {
    id: 5,
    name: 'Tesla model x 5',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: true,
    dateCreated: new Date()
  }, {
    id: 6,
    name: 'Tesla model x 6',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: true,
    dateCreated: new Date()
  }, {
    id: 7,
    name: 'Tesla model x 7',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: true,
    dateCreated: new Date()
  }, {
    id: 8,
    name: 'Tesla model x 8',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: true,
    dateCreated: new Date()
  }
];
  constructor() { }

  ngOnInit(): void {
  }

  consoleElementWithIndex(el: any, i: number): void {
    console.log('Element:', el);
    console.log('Index:', i);
  }

  deleteProduct(event: Product): void {
    if (confirm('Are you sure that you want to delete this product?')) {
      this.products = this.products.filter(product => product.id !== event.id);
    }
  }

}
