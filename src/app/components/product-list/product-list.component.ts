import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [{
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
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
    id: 1,
    name: 'Tesla model x',
    description: 'Best Car Ever',
    stats: {},
    category: 'Car',
    brand: 'Tesla',
    img: 'https://cdcssl.ibsrv.net/autodata/images/?IMG=USC60TSS011C021001.JPG&WIDTH=1200',
    price: 1000,
    salePrice: 900,
    inStock: false,
    dateCreated: new Date()
  },
];
  constructor() { }

  ngOnInit(): void {
  }

  consoleElementWithIndex(el: any, i: number): void {
    console.log('Element:', el);
    console.log('Index:', i);
  }

}
