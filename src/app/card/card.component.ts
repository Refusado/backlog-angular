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
      'monitor',
      'mouse',
      'keyboard',
      'cabes',
      'mousepad'
    ]
  }

  ngOnInit(): void {
  }

  removeItem(index: number): void {
    this.products.splice(index, 1);
  }

  addItem(): void {
    this.products.push('cabes');
  }

}
