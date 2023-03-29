import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  totalPrice: number = 0;
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  date = new Date(1993, 3, 18);
  today = new Date();

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.totalPrice = this.storeService.getTotalPrice();

    console.log('myShoppingCart--> ', this.storeService.getMyShoppingCart);
    console.log('totalPrice of Cart--> ', this.storeService.getTotalPrice());
  }
}
