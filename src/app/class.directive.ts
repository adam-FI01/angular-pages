import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective implements OnInit {

  @Input() backgroundColor: string | undefined;


  constructor(private elementRef: ElementRef) {
    /* setTimeout(() => {
      this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor
    }, 50) */

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor
  }
}




// communicate from parent to child component...

//parent component template
