import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { UrlCreator } from '../helpers/url-creator.helper';
@Injectable()
export class HomepageCategoriesDataProvider {
  constructor(private http: HttpClient, private urlCreator: UrlCreator) {}
  politicsDataProvider: EventEmitter<any> = new EventEmitter();
  businessDataProvider: EventEmitter<any> = new EventEmitter();

  DEFUALT_COUNTRY: string = 'ar';
  fetchPosts(category: string) {
    let posts: any = [];
    let url: string = this.urlCreator.urlCreator(
      'politics',
      this.DEFUALT_COUNTRY
    );
    this.http.get(url).subscribe((res) => {
      posts = { ...res };
      this.politicsDataProvider.emit(posts.articles);
    });
    let url2: string = this.urlCreator.urlCreator(
      'business',
      this.DEFUALT_COUNTRY
    );
    this.http.get(url2).subscribe((res) => {
      posts = { ...res };
      this.businessDataProvider.emit(posts.articles);
    });
  }
}
