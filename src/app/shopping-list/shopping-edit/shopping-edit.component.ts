import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/forms/src/facade/async';
import { Ingrediant } from 'app/shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() inerediantAdded= new EventEmitter<Ingrediant>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingrediant(ingName, ingAmount);
    this.inerediantAdded.emit(newIngredient);
  }

}
