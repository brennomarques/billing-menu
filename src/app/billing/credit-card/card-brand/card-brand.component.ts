import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-brand',
  templateUrl: './card-brand.component.html',
  styleUrls: ['./card-brand.component.css'],
})
export class CardBrandComponent implements OnInit {
  @Input() cardBrand: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardBrand']) {
      console.log(`Card: ${this.cardBrand}`);
    }
  }
}
