import { Component, OnInit } from '@angular/core';
import {Ingrediant} from '../shared/ingrediant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingrediants: Ingrediant []= [
    new Ingrediant('Apple', 5 ),
    new Ingrediant('Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingrediant: Ingrediant) {
    this.Ingrediants.push(ingrediant);
  }
}
