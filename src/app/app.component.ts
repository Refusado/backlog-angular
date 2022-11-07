import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'diretivas-angular';

  showingCard: boolean = true;
  showingCard2: boolean = true;
  showingCard3: boolean = true;

  cardType: string = 'computer';

  currentMode: string   = 'dark';
  isDarkMode: boolean = true;
  btnClass: string = 'unable';

  changeMode() {
    if (this.isDarkMode) {
      this.isDarkMode = false;
      this.currentMode  = 'light';
      this.btnClass = 'disable';
    } else {
      this.isDarkMode = true;
      this.currentMode = 'dark';
      this.btnClass= 'unable';
    }
  }


}
