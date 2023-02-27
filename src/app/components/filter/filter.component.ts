import { Component, OnInit } from '@angular/core';
import { CategoryFetchService } from 'src/app/services/category-fetch.service';
import { HomePageDataStorage } from 'src/app/services/home-page-data-storage.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
})
export class FilterComponent implements OnInit {
  constructor(
    private categoryFetchService: CategoryFetchService,
    private homePageDataStorage: HomePageDataStorage
  ) {}
  posts: any;
  ngOnInit(): void {}
  onClick(source: string) {
    this.categoryFetchService.fetchPostsDependOnSource('', source);
    this.categoryFetchService
      .fetchPostsDependOnSource('', source)
      .subscribe((res: any) => {
        this.posts = res.articles;

        console.log(res.articles);
        this.homePageDataStorage.editorPickNewsPosts.emit(this.posts);

        // this.homePageDataStorage.editorPickNewsPosts.emit(res.articles);
      });
  }
}
