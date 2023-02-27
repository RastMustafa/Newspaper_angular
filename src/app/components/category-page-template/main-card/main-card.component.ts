import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.less'],
})
export class CategoryMainCardComponent implements OnInit {
  @Input() recentpost: any = '';
  constructor() {}

  ngOnInit(): void {
  }
}
