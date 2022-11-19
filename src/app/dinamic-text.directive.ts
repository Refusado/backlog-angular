import { CssSelector } from '@angular/compiler';
import { Directive, ElementRef, Input, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dinamicText]'
})
export class DinamicTextDirective implements OnInit{
  @Input() dinamicValue = '';
  @Output() onDinamicChange = new EventEmitter();
  private host: HTMLElement;
  private textarea: HTMLTextAreaElement = document.createElement('textarea');

  private propertiesToCopy: string[] = [
    'padding-left',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'font-family',
    'font-size',
    'text-align',
    'overflow-wrap',
    'text-transform',
    'font-weight',
  ]

  constructor(private hostElem: ElementRef) {
    this.textarea.classList.add('dinamicInput');
    this.textarea.style.display = 'none';
    this.host = this.hostElem.nativeElement;

    this.host.style.position  = 'relative';
    this.host.style.cursor    = 'pointer';
    this.host.style.overflowWrap  = 'break-word';

    this.textarea.addEventListener('input', () => {
      this.onDinamicChange.emit(this.textarea.value);
    });

    this.textarea.addEventListener('keydown', (e) => {
      const verifySpaces: RegExp =  /\s$/gm;

      if (e.key == "Enter") {
        e.preventDefault();
        this.hideInput();
      }

      if (e.key == " " && verifySpaces.test(this.textarea.value))
        e.preventDefault();
    });

    this.textarea.addEventListener('focusout', () => {
      if (this.textarea.value === '' ) {
        this.textarea.value = 'Empty';
        this.onDinamicChange.emit(this.textarea.value);
      }
      this.hideInput();
    });

    this.host.appendChild(this.textarea);
  }

  ngOnInit(): void {
    this.textarea.value = this.dinamicValue;
    this.copyCSS(this.host, this.textarea, this.propertiesToCopy);
  }

  @HostListener('click') onClick() {
    this.showInput();
  }

  private showInput() {
    this.textarea.style.display = 'inline-block';
    this.textarea.focus();
  }

  private hideInput() {
    this.textarea.style.display = 'none';
  }

  private copyCSS(from: HTMLElement, to: HTMLElement, properties: string[]) {
    properties.forEach(prop => {
      let value = window.getComputedStyle(from).getPropertyValue(prop);
      to.style.setProperty(prop, value);
    });
  }
}
