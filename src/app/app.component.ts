import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  name = 'Andrés';
  age = 29;
  imageRandom = 'https://source.unsplash.com/random'; // https://source.unsplash.com/random
  imgParent = '';
  btnDisabled = true;
  names: string[] = ['Andrés', 'Arturo', 'Rosalba', 'Lua', 'Vainilla'];
  newName = '';
  widthImg = 10;
  showImage = true;

  register = {
    name: '',
    email: '',
    password: '',
  };

  box = {
    width: 100,
    height: 100,
    background: '#61239F',
  };

  person = {
    name: 'Andrés',
    age: 29,
    avatar: 'https://source.unsplash.com/random',
  };

  products: Product[] = [
    {
      id: '1',
      title: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      id: '2',
      title: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      id: '3',
      title: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      id: '4',
      title: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      id: '5',
      title: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      id: '6',
      title: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  /**********  Métodos **************/

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(ev: Event) {
    const element = ev.target as HTMLElement;
    console.log('--- element.scrollTop', element.scrollTop);
  }

  changeName(ev: Event) {
    const element = ev.target as HTMLInputElement;
    this.person.name = element.value;
  }

  buttonClick($event: Event) {
    console.log('element', $event);
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log('this.register ->', this.register);
  }

  onImageLoaded(image: string) {
    console.log('The image received by the son on the parent: ', image);
  }
}
