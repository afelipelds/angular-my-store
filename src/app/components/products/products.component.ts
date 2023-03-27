import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  totalPrice: number = 0;
  myShoppingCart: Product[] = [];
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

  constructor(private storeService: StoreService) {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit() {}

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.totalPrice = this.storeService.getTotalPrice();

    console.log('myShoppingCart--> ', this.storeService.myShoppingCart);
    console.log('totalPrice of Cart--> ', this.storeService.getTotalPrice());
  }
}
