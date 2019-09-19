import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirectiveMy]'
})
export class DirectiveMyDirective {

  constructor(private elementRef :ElementRef) {
    elementRef.nativeElement.style.background ='pink';
    elementRef.nativeElement.style.color ='white';
    elementRef.nativeElement.style.padding = "60px";
   }
   @HostListener('mouseenter')
mouseEnter(){
this.background = "skyblue";
// this.elementRef.nativeElement.style.background = 'red';
// this.elementRef.nativeElement.style.color = 'black';
// this.elementRef.nativeElement.style.padding = "20px";
}
@HostListener('mouseleave')
mouseLeave(){
  this.background = "purple";
// this.elementRef.nativeElement.style.background = 'violet';
// this.elementRef.nativeElement.style.color = 'blue';
}
@HostBinding('style.background') background : string;

}
