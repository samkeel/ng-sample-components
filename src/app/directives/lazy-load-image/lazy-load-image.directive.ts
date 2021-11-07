import {
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Input,
} from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImage]',
})
export class LazyLoadImageDirective {
  @HostBinding('attr.src') srcAttribute = '';
  @Input() src!: string;
  public observer!: IntersectionObserver;

  constructor(
    private element: ElementRef,
    @Inject('Window') public window: Window
  ) {}

  public ngAfterViewInit(): void {
    // console.log(this.canLazyLoad());
    if (this.canLazyLoad()) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting }) => {
          console.log(isIntersecting);
          if (isIntersecting) {
            this.loadImage();
            this.observer.unobserve(this.element.nativeElement);
          }
        });
      });
      this.observer.observe(this.element.nativeElement);
    } else {
      this.loadImage();
    }
  }

  private canLazyLoad(): boolean {
    return this.window && this.window.hasOwnProperty('IntersectionObserver');
  }

  private loadImage(): void {
    this.srcAttribute = this.src;
  }

  public ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
