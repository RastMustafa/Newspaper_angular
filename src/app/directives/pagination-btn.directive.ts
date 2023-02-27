import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appPaginationBtn]',
})
export class PaginationBtnsDirective implements OnInit {
  firstInit: boolean = true;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.renderer.removeClass(this.el.nativeElement, 'bg-dark'); // text-light
  }

  @HostListener('click', ['$event']) onclick(e: Event) {
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement, 'bg-dark');
    }, 100);
  }
}
