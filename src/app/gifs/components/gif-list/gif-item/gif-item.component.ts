import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-item',
  imports: [],
  templateUrl: './gif-item.component.html',
})
export class GifItemComponent {
  num=input<string>();

  get imageUrl(): string {
    return `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${this.num()}.jpg`;
  }
}
