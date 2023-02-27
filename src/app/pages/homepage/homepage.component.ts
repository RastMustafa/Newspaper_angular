import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { HomePageDataStorage } from 'src/app/services/home-page-data-storage.service';

import { CategoryFetchService } from 'src/app/services/category-fetch.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryFetchService: CategoryFetchService,
    private homePageDataStorage: HomePageDataStorage
  ) {}

  posts: any = [];
  oneSlidePost: any = '';
  category: string = 'general';
  sliderPost1: any = [];
  tempPosts: any = '';
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.category = params['id'];
      this.posts = this.categoryFetchService
        .fetchPosts(this.category)
        .subscribe((res: any) => {
          this.posts = res.articles;
          this.homePageDataStorage.editorPickNewsPosts.emit(this.posts);
          this.oneSlidePost = this.posts[0];
          this.tempPosts = this.posts;
        });
    });
  }
}
