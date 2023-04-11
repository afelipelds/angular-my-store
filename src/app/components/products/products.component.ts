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
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    description: '',
    category: { id: '', name: '' },
  };

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
    console.log('totalPrice of Cart--> ', this.storeService.getTotalPrice());
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowProductDetail(id: string) {
    console.log('id: ', id);
    this.productsService.getProduct(id).subscribe((data) => {
      this.toggleProductDetail();
      this.productChosen = data;
      console.log('this.productChosen -----', this.productChosen);
    });
  }
}
