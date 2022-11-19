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

  constructor(private hostElem: ElementRef) {
    this.textarea.classList.add('dinamicInput');
    this.textarea.style.display = 'none';

    this.textarea.addEventListener('focusout', () => {
      if (this.textarea.value === '' ) {
        this.textarea.value = 'Empty';
        this.onDinamicChange.emit(this.textarea.value);
      }
      this.hideInput();
    });
    this.textarea.addEventListener('input', () => {
      this.onDinamicChange.emit(this.textarea.value);
    });

    this.textarea.addEventListener('keydown', (e) => {
      const verifySpace: RegExp =  /\s$/gm;

      if (e.key == "Enter") {
        this.hideInput();
        e.preventDefault();
      }

      if (e.key == " " && verifySpace.test(this.textarea.value)) {
        e.preventDefault();
      }
    });

    this.host = this.hostElem.nativeElement;

    this.host.style.position = 'relative';
    this.host.style.cursor = 'pointer';
    this.host.style.overflowWrap  = 'break-word';

    this.host.appendChild(this.textarea);
  }

  ngOnInit(): void {
    this.textarea.style.backgroundColor = this.dinamicValue;
    this.textarea.value = this.dinamicValue;

    const pl: string = window.getComputedStyle(this.host).paddingLeft;
    const pt: string = window.getComputedStyle(this.host).paddingTop;
    const pr: string = window.getComputedStyle(this.host).paddingRight;
    const pb: string = window.getComputedStyle(this.host).paddingBottom;
    const ff: string = window.getComputedStyle(this.host).fontFamily;
    const fs: string = window.getComputedStyle(this.host).fontSize;
    const ta: string = window.getComputedStyle(this.host).textAlign;
    const ow: string = window.getComputedStyle(this.host).overflowWrap;
    const tt: string = window.getComputedStyle(this.host).textTransform;
    const fw: string = window.getComputedStyle(this.host).fontWeight;

    this.textarea.style.paddingLeft   = pl;
    this.textarea.style.paddingTop    = pt;
    this.textarea.style.paddingRight  = pr;
    this.textarea.style.paddingBottom = pb;
    this.textarea.style.fontFamily    = ff;
    this.textarea.style.fontSize      = fs;
    this.textarea.style.textAlign     = ta;
    this.textarea.style.overflowWrap  = ow;
    this.textarea.style.textTransform = tt;
    this.textarea.style.fontWeight    = fw;

    console.log(this.host);
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
}
