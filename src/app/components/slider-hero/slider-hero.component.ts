import { Component, Input, OnInit } from '@angular/core';
import { SliderHeroDataProvider } from 'src/app/services/slider-hero-data-provider.service';
@Component({
  selector: 'app-slider-hero',
  templateUrl: './slider-hero.component.html',
  styleUrls: ['./slider-hero.component.less'],
})
export class SliderHeroComponent implements OnInit {
  constructor(private sliderHeroDataProvider: SliderHeroDataProvider) {}
  sliderPosts: any;
  isFetching: boolean = false;
  ngOnInit(): void {
    this.sliderHeroDataProvider.fetchingIndicatorStart();
    this.sliderHeroDataProvider.fetchPosts('');
    this.sliderHeroDataProvider.dataProvider.subscribe((res) => {
      this.sliderPosts = res.slice(0, 3);
      this.sliderHeroDataProvider.fetchingIndicatorStop();
    });
    this.sliderHeroDataProvider.isFetching.subscribe((res) => {
      this.isFetching = res;
    });
  }
}

// make every component fetch its onw data .
// make a service for every componet that fetch its own data .
