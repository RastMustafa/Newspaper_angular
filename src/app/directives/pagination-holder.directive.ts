import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appPaginationHolder]',
})
export class PaginationHolderDirective implements OnInit {
  firstInit: boolean = true;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.el.nativeElement.children[0].children[0].classList.add('bg-dark');
  }

  @HostListener('click', ['$event']) onclick(e: Event) {
    for (let i of this.el.nativeElement.children) {
      i.children[0].classList.remove('bg-dark');
    }
    console.log();
    //   this.renderer.addClass(this.el.nativeElement, 'bg-dark');
  }
}
