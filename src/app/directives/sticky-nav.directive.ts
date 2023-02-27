import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective implements OnInit {
  firstInit: boolean = true;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.removeClass(this.el.nativeElement, 'new-nav');
  }

  @HostListener('document:scroll', ['$event']) onclick(e: Event) {
    if (window.scrollY >= 100) {
      this.renderer.addClass(this.el.nativeElement, 'new-nav');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'new-nav');
    }
  }
}
