import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { UrlCreator } from '../helpers/url-creator.helper';
@Injectable()
export class SliderHeroDataProvider implements OnInit {
  constructor(private http: HttpClient, private urlCreator: UrlCreator) {}
  dataProvider: EventEmitter<any> = new EventEmitter();
  isFetching: EventEmitter<boolean> = new EventEmitter();
  DEFUALT_COUNTRY: string = 'ar';
  fetchPosts(category: string) {
    let posts: any = [];
    let url: string = this.urlCreator.urlCreator(
      category,
      this.DEFUALT_COUNTRY,
      'the-washington-post'
    );
    this.http.get(url).subscribe((res) => {
      posts = { ...res };
      console.log('=============================');
      this.dataProvider.emit(posts.articles);
    });
  }

  ngOnInit(): void {}
  fetchingIndicatorStop() {
    this.isFetching.emit(false);
  }
  fetchingIndicatorStart() {
    this.isFetching.emit(true);
  }
}
