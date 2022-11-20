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
  cards: string[] = [
    'diretivas-angular',
    'filesystem'
  ]

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.changeMode();
  }

  changeMode(): void {
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

  createCard(): void {
    // const container: HTMLElement | null = document.getElementById('card-container');
    // const newCard: HTMLElement = document.createElement('app-card');
    // if (container) {
    //   container.appendChild(newCard);
    // }
    this.cards.push('Projeto');
  }

}
