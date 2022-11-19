import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'backlog-angular';
  toggleBtnClass: 'enabled' | 'disabled' = 'enabled';
  currentMode: 'dark-mode' | 'light-mode' = 'light-mode';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.changeMode();
  }

  changeMode() {
    if (this.currentMode === 'dark-mode') {
      this.document.body.classList.remove(this.currentMode);
      this.currentMode = 'light-mode';
      this.toggleBtnClass = 'disabled';
      this.document.body.classList.add(this.currentMode);
    } else {
      this.document.body.classList.remove(this.currentMode);
      this.currentMode = 'dark-mode';
      this.toggleBtnClass = 'enabled';
      this.document.body.classList.add(this.currentMode);
    }
  }

}
