import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageRandom = 'https://source.unsplash.com/random';
  btnDisabled = true;
  imgParent = '';
  showImage = true;

  /**********  Métodos **************/

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onScroll(ev: Event) {
    const element = ev.target as HTMLElement;
    console.log('--- element.scrollTop', element.scrollTop);
  }

  buttonClick($event: Event) {
    console.log('element', $event);
  }

  onImageLoaded(image: string) {
    console.log('The image received by the son on the parent: ', image);
  }
}
