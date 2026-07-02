import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private light = false;

  toggle(): void {
    this.light = !this.light;
    document.body.classList.toggle('light-theme', this.light);
  }

  get isLight(): boolean {
    return this.light;
  }
}
