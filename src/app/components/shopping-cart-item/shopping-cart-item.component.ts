import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Shirt } from '../../shared/shirt';
import { ShoppingItem } from '../../shared/shopping-item';
import { ShirtSize } from '../../shared/shirt-size';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

const TIMES_PATH = "../../../assets/images/icon-times.svg";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: ShoppingItem;
  @Input() shoppingCartFormItems: FormArray;
  @Output() quantityChange = new EventEmitter();
  @Output() formReady = new EventEmitter<FormGroup>();
  @Output() removeItem = new EventEmitter<FormGroup>();
  shoppingItemForm: FormGroup;

  timesImagePath: string = TIMES_PATH;

  constructor(private shoppingCartService: ShoppingCartService, private fb: FormBuilder) { }

  ngOnInit() {
    this.shoppingItemForm = this.fb.group({
      size: new FormControl(this.item.size, [Validators.required]),
      quantity: new FormControl(this.item.quantity, [Validators.required])
    });
    this.formReady.emit(this.shoppingItemForm);
  }

  changeQuantity(q) {
    this.item.quantity = q;
    this.quantityChange.emit(this.item);
  }

  removeCartItem(item: ShoppingItem): any {
    this.shoppingCartService.removeFromShoppingCart(item);
    this.removeItem.emit(this.shoppingItemForm);
  }

}
