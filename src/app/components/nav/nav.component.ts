import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy, AfterViewInit {
  activeMenu = false;
  shoppingCartLength = 0;
  shoppingCartTotalPrice = 0;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(
      (products) => (this.shoppingCartLength = products.length)
    );
  }
  ngOnDestroy(): void {}

  ngAfterViewInit() {
    this.shoppingCartTotalPrice = this.storeService.getTotalPrice();
    // console.log(
    //   '---- this.shoppingCartTotalPrice --',
    //   this.shoppingCartTotalPrice
    // );
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
