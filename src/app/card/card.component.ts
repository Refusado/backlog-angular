import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardName: string = 'Undefined';

  listItems: string[] = [];
  newItemText: string = "Tarefa";

  cardDescription: string = "Escreva uma descrição do seu projeto clicando aqui.";

  showingAddBtn: boolean = true;
  editingDescription: boolean = false;

  constructor() {
    this.listItems = [
      'Criar README.md',
      'Configurar deploy'
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

  openInput(): void {
    if (!this.editingDescription)
      setTimeout(() => {
        this.editingDescription = true;
        console.log('aberto');
      }, 10);
  }

  closeInput(): void {
    this.editingDescription = false;
    console.log('fechado');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    const elem = event.target;
    const input = document.getElementById('descriptionInput');
    const span = document.getElementById('cardDescription');

    if (this.editingDescription && (elem != input) && (elem != span))
      this.closeInput();
  }

  preventTyping(event: any): void {
    const verifySpace: RegExp =  /\s$/gm;

    if (event.key == "Enter")
      event.preventDefault();

    if (event.key == " " && verifySpace.test(event.target.value))
      event.preventDefault();
  }
}
