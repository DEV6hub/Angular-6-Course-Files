import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Shirt } from '../../shared/shirt';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ShirtSize } from '../../shared/shirt-size';
import { ShirtService } from '../../core/shirt.service';
import 'fabric';

declare const fabric: any;

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit, OnDestroy {

  @Input() shirt: Shirt;
  subs: Subscription[] = [];
  shirtSize = ShirtSize;

  open: boolean = false;
  direction: string = 'up';
  animationMode: string = 'fling';
  actionButtonsShown: boolean = false;
  canvas: fabric.Canvas;
  @ViewChild('canvas') canvasElement: ElementRef;

  constructor(private shoppingCartService: ShoppingCartService,
    private shirtService: ShirtService,
    private router: Router,
    private element: ElementRef) { }

  ngOnInit() {
    if (this.shirt.canvasJSON !== '') {
      if (!this.canvas) {
        this.canvas = new fabric.Canvas(this.canvasElement.nativeElement, {
          width: this.element.nativeElement.clientWidth,
          height: this.element.nativeElement.clientHeight
        });
      }
      this.canvas.loadFromJSON(this.shirt.canvasJSON, () => {
        this.canvas.getObjects().forEach(obj => {
          console.log(obj);
          
        });
        this.canvas.renderAll();
      });
    }
  }

  ngOnDestroy(): any {
    if (this.subs) {
      this.subs.forEach(sub => sub.unsubscribe());
    }
    this.subs = [];
  }

  renderImage(image) {
    return '../../../assets/images/image';
  }

  addToBasket(shirt: Shirt, size: ShirtSize): any {
    this.shoppingCartService.addToShoppingCart(shirt, size);
  }

  edit() {

  }

  duplicate(shirt: Shirt) {
    this.shirtService.duplicateShirt(shirt);
  }

  delete(shirt: Shirt): void {
    this.shirtService.deleteShirt(shirt);
  }

  getStyleImagePath(shirt: Shirt): string {
    return this.shirtService.getStyleImagePath(shirt);
  }
}
