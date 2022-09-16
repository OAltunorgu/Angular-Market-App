import { BasketModel } from './../../models/basket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  baskets: BasketModel[] = [];

  getBaskets(event: any) {
    this.baskets = event.data;
  }
  constructor() {}

  ngOnInit(): void {}
}
