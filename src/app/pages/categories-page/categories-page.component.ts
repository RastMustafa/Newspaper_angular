import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryFetchService } from 'src/app/services/category-fetch.service';
import { HomePageDataStorage } from 'src/app/services/home-page-data-storage.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.less'],
})
export class CategoriesPageComponent implements OnInit {
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
          this.tempPosts = this.posts;
        });
    });
  }
}

// Api Key : 593ebf6528d2451e9e770f74d2be15b0
