import { Component } from '@angular/core';
import { GifItemComponent } from "./gif-item/gif-item.component";

@Component({
  selector: 'gif-list',
  imports: [GifItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent { }
