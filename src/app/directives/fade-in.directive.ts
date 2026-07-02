import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[appFadeIn]', standalone: true })
export class FadeInDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('fade-in');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.el.nativeElement.classList.add('visible');
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(this.el.nativeElement);
  }
}
