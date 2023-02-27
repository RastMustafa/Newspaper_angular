import { EventEmitter, Injectable } from '@angular/core';
@Injectable()
export class HomePageDataStorage {
  editorPickNewsPosts: EventEmitter<any> = new EventEmitter();
  trandingNewsPost: EventEmitter<any> = new EventEmitter();
}
