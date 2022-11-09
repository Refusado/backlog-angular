import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: string[] = [];
  showingBtn: boolean = true;

  @Input() type: string = 'Undefined';

  constructor() {
    this.products = [
      'tarefa 1',
      'tarefa 2...'
    ]
  }

  ngOnInit(): void {
  }

  removeItem(index: number): void {
    this.products.splice(index, 1);
  }

  addItem(): void {
    if (this.newItemText) {
      this.products.push(this.newItemText);
      this.newItemText = "Nova tarefa";
    }
  }

  newItemText: string = "Nova tarefa";
  cardDescription: string = "Este é o card para um usuário comum e possue apenas algumas ferramentas";
  editingDescription: boolean = false;

  editDescription(): void {
    let input = document.getElementById('descriptionInput');

    if (this.editingDescription) {
      this.editingDescription = false;

      if (input) {
        input.focus();

        const range = document.createRange();
        range.setStart(input, 0);
      }

    } else {
      this.editingDescription = true;
    }
  }

  preventNewLine(event: Event): void {
    event.preventDefault();
  }

}
