import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  totalPrice: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: 65,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      id: '3',
      name: 'Colección de albumes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      id: '5',
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      id: '6',
      name: 'Gafas',
      price: 44,
      image: './assets/images/glasses.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    this.totalPrice = this.myShoppingCart.reduce(
      (sum, item) => sum + item.price,
      0
    );
    console.log('myShoppingCart--> ', this.myShoppingCart);
  }
}
