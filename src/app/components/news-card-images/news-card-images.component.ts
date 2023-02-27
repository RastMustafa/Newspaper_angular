import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card-images',
  templateUrl: './news-card-images.component.html',
  styleUrls: ['./news-card-images.component.less'],
})
export class NewsCardImagesComponent implements OnInit, AfterViewInit {
  displayMode: boolean = false; // vertical card
  mode: boolean | undefined;
  showImage: boolean = true;
  @Input() cardMode: string | undefined;
  @Input() post: any = '';
  @Input() postnum: number = 0;
  constructor() {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    if (this.cardMode === 'showNumber') {
      this.showImage = false;
    }
  }
}

// export class NewsCardComponent implements OnInit, AfterViewInit {
// displayMode: boolean = false; // vertical card
// mode: boolean | undefined;
// showImage: boolean = true;
// @Input() cardMode: string | undefined;
// @Input() post: any = '';
// @Input() postnum: number=0 ;
// constructor() {}
// ngAfterViewInit(): void {}
// ngOnInit(): void {
//   console.log(this.postnum)
//   if (this.cardMode === 'showNumber') {
//     this.showImage = false;
//   }
// }
// }
