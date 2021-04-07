export interface Product {
    id: number;
    name: string;
    description: string;
    stats: any;
    category: string;
    brand: string;
    img: string;
    price: number;
    salePrice: number;
    inStock: boolean;
    dateCreated: Date;
}
