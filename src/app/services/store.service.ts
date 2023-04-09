import { Injectable } from '@angular/core';

// BehaviorSubject: Permite crear un Observable con sus
// propiedes, a la cuál el component pueda suscribirse
// y reaccionar ante cambios del estado
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  public myCart$ = this.myCart.asObservable();

  constructor() {}

  addProduct(product: Product) {
    // El observable emitirá un nuevo valor con cada producto que se agregue al carrito.
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
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
