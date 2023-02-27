import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryFetchService } from 'src/app/services/category-fetch.service';
import { HomePageDataStorage } from 'src/app/services/home-page-data-storage.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-hero',
  templateUrl: './nav-hero.component.html',
  styleUrls: ['./nav-hero.component.less'],
})
export class NavHeroComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private categoryFetchService: CategoryFetchService,
    private homePageDataStorage: HomePageDataStorage
  ) {}
  posts: any;
  @ViewChild('inputEl') input: any;
  ngOnInit(): void {}
  onSearch() {
    console.log(this.input.nativeElement.value);
    let query = this.input.nativeElement.value;
    this.router.navigate(['category']);
    this.categoryFetchService
      .fetchPosteUsingQuery('', '', query)
      .subscribe((res: any) => {
        this.posts = res.articles;
        this.homePageDataStorage.editorPickNewsPosts.emit(this.posts);
      });
    this.input.nativeElement.value = '';
  }
}
