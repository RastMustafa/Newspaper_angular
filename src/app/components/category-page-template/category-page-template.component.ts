import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryFetchService } from 'src/app/services/category-fetch.service';
import { HomePageDataStorage } from 'src/app/services/home-page-data-storage.service';

@Component({
  selector: 'app-category-page-template',
  templateUrl: './category-page-template.component.html',
  styleUrls: ['./category-page-template.component.less'],
})
export class CategoryPageTemplateComponent implements OnInit {
  constructor(
    private homePageDataStorage: HomePageDataStorage,
    private el: ElementRef,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) {}
  @Input() source: string = '';
  recentPosts: any = '';
  popularPosts: any = '';
  posts: any = '';
  pageNumber: number = 1;
  postPerPage: number = 4;
  numArray: number[] = [];
  pages: any = [];
  category: string = 'Recent News';
  isFetching: boolean = true;

  //************************************************** */
  // this method is to separate the posts array to sub array where every sub array is a page
  //************************************************** */
  separatePostToPages() {
    let t = 0;
    for (let i of this.numArray) {
      let temp = [];
      for (let j = 0; j < this.postPerPage; j++, t++) {
        temp.push(this.posts[t]);
      }
      this.pages.push(temp);
    }
    let lastArry = [];
    for (let i = 0; i < this.posts.length % this.postPerPage; i++) {
      lastArry.push(this.posts[this.posts.length - i - 1]);
    }
    this.pages.push(lastArry);
  }

  ngOnInit(): void {
    //************************************************** */
    // if the template is being displayed in the Hompage
    // else the template is being displayed in the categories page
    //************************************************** */

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.category = params['id'];
      } else {
        this.category = 'Recent News';
      }
    });
    if (this.source === 'homepage') {
      this.isFetching = true;
      this.homePageDataStorage.editorPickNewsPosts.subscribe((res) => {
        this.pageNumber =
          res.length / this.postPerPage +
          (res.length % this.postPerPage === 0 ? 1 : 0);

        this.numArray = Array(Math.ceil(this.pageNumber))
          .fill(0)
          .map((x, i) => i);
        this.numArray.shift();
        if (this.numArray.length >= 10) {
          this.numArray = this.numArray.slice(0, 10);
        }
        this.posts = res;
        this.recentPosts = res.slice(0, this.postPerPage);
        this.popularPosts = res.slice(this.postPerPage, this.postPerPage + 6);
        this.separatePostToPages();
        this.isFetching = false;
      });
    } else {
      this.isFetching = true;
      this.postPerPage = 10;
      this.homePageDataStorage.editorPickNewsPosts.subscribe((res) => {
        this.pageNumber =
          res.length / this.postPerPage +
          (res.length % this.postPerPage === 0 ? 1 : 0);

        this.numArray = Array(Math.ceil(this.pageNumber))
          .fill(0)
          .map((x, i) => i);
        this.numArray.shift();
        this.posts = res;
        this.recentPosts = res.slice(0, this.postPerPage);
        this.popularPosts = res.slice(6, 10);
        this.separatePostToPages();
        this.isFetching = false;
      });
    }
  }

  //************************************************** */
  // on changing the page update the posts
  //************************************************** */
  onPageNum(pageNum: number) {
    this.recentPosts = this.pages[pageNum];
  }
}
