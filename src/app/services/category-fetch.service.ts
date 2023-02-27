import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UrlCreator } from '../helpers/url-creator.helper';
import { HomePageDataStorage } from './home-page-data-storage.service';

@Injectable()
export class CategoryFetchService {
  constructor(private http: HttpClient, private urlCreator: UrlCreator) {}

  DEFUALT_COUNTRY: string = 'us';
  fetchPosts(category: string) {
    let url: string = this.urlCreator.urlCreator(
      category,
      this.DEFUALT_COUNTRY
    );
    return this.http.get(url);
  }
  fetchPostsDependOnSource(category: string, source: string) {
    let posts: any = [];

    let url: string = this.urlCreator.urlCreator(
      category,
      this.DEFUALT_COUNTRY,
      source ? source : ''
    );
    return this.http.get(url);
  }

  fetchPosteUsingQuery(category: string, source: string, query: string) {
    let posts: any = [];

    let url: string = this.urlCreator.urlCreator(
      category,
      this.DEFUALT_COUNTRY,
      source ? source : '',
      query
    );
    return this.http.get(url);
  }
}

//  ?country=us&apiKey=593ebf6528d2451e9e770f74d2be15b0

/**
 * in the same componet there is more the way to fetch it .
 * if the params of category is defined then fetch depend on the url that takes the category
 * if its undefined then fetch the generals
 * the generals is found in the homepage, and in the category page/=.
 */

//  https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=593ebf6528d2451e9e770f74d2be15b0
//  https://newsapi.org/v2/top-headlines?country=us&category=politcs&apiKey=593ebf6528d2451e9e770f74d2be15b0
