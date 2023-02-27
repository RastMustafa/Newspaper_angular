import { Component, OnInit } from '@angular/core';
import { HomepageCategoriesDataProvider } from 'src/app/services/homepage-categories-data-provider.service';
@Component({
  selector: 'app-hompage-categories-section',
  templateUrl: './hompage-categories-section.component.html',
  styleUrls: ['./hompage-categories-section.component.less'],
})
export class HompageCategoriesSectionComponent implements OnInit {
  constructor(
    private homepageCategoriesDataProvider: HomepageCategoriesDataProvider
  ) {}
  politicsPosts: any = [];
  businessPosts: any = [];
  ngOnInit(): void {
    this.homepageCategoriesDataProvider.fetchPosts('');
    this.homepageCategoriesDataProvider.politicsDataProvider.subscribe(
      (res) => {
        console.log(res);
        this.politicsPosts = res.slice(0, 5);
      }
    );
    this.homepageCategoriesDataProvider.businessDataProvider.subscribe(
      (res) => {
        console.log(res);
        this.businessPosts = res.slice(0, 5);
      }
    );
  }
}
