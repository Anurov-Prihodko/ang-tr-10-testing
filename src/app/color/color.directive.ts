import { ASTWithSource } from '@angular/compiler';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostBinding('style.color') color: any;

  @HostListener('click') onClick() {
    this.color = 'red';
  }
}
