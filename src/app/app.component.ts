import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'backlog-angular';

  showingCard: boolean = true;
  showingCard2: boolean = true;
  showingCard3: boolean = true;

  cardType: string = 'computer';
  btnClass: 'enabled' | 'disabled' = 'enabled';

  currentMode: 'dark-mode' | 'light-mode' = 'dark-mode';

  constructor(
    @Inject(DOCUMENT)
    private document: Document
  ) {
    this.changeMode();
  }

  changeMode() {
    if (this.currentMode === 'dark-mode') {
      this.document.body.classList.remove(this.currentMode);
      this.currentMode = 'light-mode';
      this.btnClass = 'disabled';
      this.document.body.classList.add(this.currentMode);
    } else {
      this.document.body.classList.remove(this.currentMode);
      this.currentMode = 'dark-mode';
      this.btnClass = 'enabled';
      this.document.body.classList.add(this.currentMode);
    }
  }

}
