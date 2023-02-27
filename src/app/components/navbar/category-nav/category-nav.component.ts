import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.less'],
})
export class CategoryNavComponent implements OnInit {
  constructor() {}
  size0_992: boolean = false;
  // size992_more = false;
  toggleIcon: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth < 992) {
      this.size0_992 = true;
      // now based on the screen size you want to check
      // enable the variable and make it true
      // based on it, you can enable the class in template
    } else {
      this.size0_992 = false;
    }
  }
  toggleIcons() {
    this.toggleIcon = !this.toggleIcon;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth < 992) {
      this.size0_992 = true;
      // now based on the screen size you want to check
      // enable the variable and make it true
      // based on it, you can enable the class in template
    } else {
      this.size0_992 = false;
    }
  }
}
