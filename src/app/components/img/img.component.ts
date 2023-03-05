import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  @Input() image = 'Esto es una imagen';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  constructor(private cdRef: ChangeDetectorRef) {}

  imageError() {
    this.image = this.imageDefault;
    this.cdRef.detectChanges(); //
    return true;
  }

  imageLoaded() {
    console.log('The image has loaded inside the son!');
    this.loaded.emit(this.image);
  }
}
