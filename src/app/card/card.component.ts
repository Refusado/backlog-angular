import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardName: string = 'Undefined';

  listItems: string[] = [];
  newItemText: string = "Tarefa";

  cardDescription: string = "Escreva a descrição do projeto aqui.";

  showingAddBtn: boolean = true;

  constructor() {
    this.listItems = [
      'Prototipar',
      'Criar wireframe...'
    ]
  }

  addItem(): void {
    if (this.newItemText) {
      this.listItems.push(this.newItemText);
      this.newItemText = "Tarefa";
    }
  }

  removeItem(index: number): void {
    this.listItems.splice(index, 1);
  }
}
