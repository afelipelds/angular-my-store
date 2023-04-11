import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-image',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  image: string = '';

  @Input('image')
  set changeImageSetter(newImage: string) {
    this.image = newImage;
    //code
    // console.log('change just the image', newImage);
  }
  @Input() alt = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  counter = 0;
  // counterFunction: number | undefined;

  constructor(private cdRef: ChangeDetectorRef) {
    // before render and run once
    // console.log('constructor ->> ', this.image);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before & during render and constantly is seeing changes on @Inputs
    // Si es necesario ejecutar acciones por esos cambios en los @Input acá es el sitio
    this.alt = changes['alt'].currentValue;
  }

  ngOnInit() {
    // before render. calls to api, async, fetch - but run only once
  }

  ngAfterViewInit() {
    // After render & handle children
  }

  ngOnDestroy() {
    // delete components, kill them
  }

  imageError() {
    this.image = this.imageDefault;
    this.cdRef.detectChanges(); //
    return true;
  }

  imageLoaded() {
    // console.log('The image has loaded inside the son!');
    this.loaded.emit(this.image);
  }
}
