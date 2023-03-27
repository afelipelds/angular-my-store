import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  myShoppingCart: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }

  getMyShoppingCart() {
    return this.myShoppingCart;
  }

  getTotalPrice() {
    return this.myShoppingCart.reduce(
      (priceSum, item) => priceSum + item.price,
      0
    );
  }
}
