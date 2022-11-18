import { Directive, ElementRef, Input, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dinamicText]'
})
export class DinamicTextDirective implements OnInit{
  @Input() color = '';
  @Output() onValueChange = new EventEmitter();

  private input: HTMLInputElement = document.createElement('input');

  constructor(private hostElem: ElementRef) {
    this.input.classList.add('dinamicInput');
    this.input.style.display = 'none';

    this.input.addEventListener('focusout', () => {
      this.onValueChange.emit(this.input.value);
      this.hideInput();
    });
    this.input.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        this.onValueChange.emit(this.input.value);
        this.hideInput();
      }
    });

    // this.hostElem.nativeElement.style.backgroundColor = 'blue';
    this.hostElem.nativeElement.style.position = 'relative';
    this.hostElem.nativeElement.style.cursor = 'pointer';

    this.hostElem.nativeElement.appendChild(this.input);
  }

  ngOnInit(): void {
    this.input.style.backgroundColor = this.color;
    this.input.value = this.color;
  }

  @HostListener('click') onClick() {
    this.showInput();
  }

  showInput() {
    this.input.style.display = 'inline-block';
    this.input.focus();
  }

  hideInput() {
    this.input.style.display = 'none';
  }

}
