import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { UrlCreator } from '../helpers/url-creator.helper';
@Injectable()
export class EditorPickDataProvider {
  constructor(private http: HttpClient, private urlCreator: UrlCreator) {}
  dataProvider: EventEmitter<any> = new EventEmitter();

  DEFUALT_COUNTRY: string = 'us';
  fetchPosts(category: string) {
    let posts: any = [];
    let url: string = this.urlCreator.urlCreator(
      category,
      this.DEFUALT_COUNTRY,
      'bbc-news'
    );
    this.http.get(url).subscribe((res) => {
      posts = { ...res };
      this.dataProvider.emit(posts.articles);
    });
  }
}
