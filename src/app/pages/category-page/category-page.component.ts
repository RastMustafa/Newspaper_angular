import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryFetchService } from 'src/app/services/category-fetch.service';
import { HomePageDataStorage } from 'src/app/services/home-page-data-storage.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.less'],
})
export class CategoryPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryFetchService: CategoryFetchService,
    private homePageDataStorage: HomePageDataStorage
  ) {}

  posts: any = [];
  oneSlidePost: any = '';
  category: string = '';
  sliderPost1: any = [];
  tempPosts: any = '';
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.category = params['id'];
      this.posts = this.categoryFetchService
        .fetchPosts(this.category)
        .subscribe((res: any) => {
          this.posts = res.articles;
          this.sliderPost1 = res.articles.slice(0, 3);
          this.homePageDataStorage.editorPickNewsPosts.emit(this.posts);
          this.oneSlidePost = this.posts[0];
          this.tempPosts = this.posts;
        });
    });
  }
}
