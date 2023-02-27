import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-slide-section',
  templateUrl: './one-slide-section.component.html',
  styleUrls: ['./one-slide-section.component.less'],
})
export class OneSlideSectionComponent implements OnInit {
  @Input() appendedPost: any = '';
  constructor() {}

  ngOnInit(): void {}
}
