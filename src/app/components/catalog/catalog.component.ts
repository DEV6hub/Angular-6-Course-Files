import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ShirtGenderPipe } from '../../filters/shirt-filter';
import { Shirt } from '../../shared/shirt';
import { ShirtService } from '../../core/shirt.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { SlidingPanelsService } from '../../core/sliding-panels.service';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import 'fabric';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../../core/user-info.service';
import { UserInfo } from '../../shared/user-info';

declare const fabric: any;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  private shirts: Shirt[];
  private shippingInfoPanelWidth: number;
  private paymentMethodPanelWidth: number;
  private editableShirt: Shirt;
  subscriptions: Subscription[];
  shoppingCartItemsCount: number;
  showShoppingCart = false;
  showShippingInfo = false;
  showPaymentMethod = false;
  showPaymentComplete = false;
  showDesignShirt = false;
  designsCount: number;
  designName: string;

  @ViewChild('shoppingCartPanel') shoppingCartPanel: ElementRef;
  @ViewChild('shippingInfoPanel') shippingInfoPanel: ElementRef;
  @ViewChild('paymentMethodPanel') paymentMethodPanel: ElementRef;
  @ViewChild('catalogTabs') catalogTabset: NgbTabset;

  logoPath = '../../../assets/images/navlogo.png';

  constructor(private shirtService: ShirtService,
    private shoppingCartService: ShoppingCartService,
    private slidingPanelsService: SlidingPanelsService,
    private userInfoService: UserInfoService,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute) {

    this.subscriptions = [];
    this.shirts = [];
  }

  ngOnInit(): any {
    // this.route.snapshot.data.message.subscribe((res) => {
    //   this.userInfoService.userInfo = res;
    // });
    //this.userInfoService.userInfo = this.route.snapshot.data.message as UserInfo;
    this.subscriptions.push(this.shirtService.getShirts().subscribe((result) => {
      this.shirts = result;
      this.updateDesignCount(this.catalogTabset.activeId);
    }));

    this.subscriptions.push(this.shoppingCartService.getShoppingCartItems().subscribe((items) => {
      this.shoppingCartItemsCount = items.length;
    }));

    this.subscriptions.push(
      this.slidingPanelsService.shippingInfo$.subscribe((state) => {
        if (state) {
          this.openShipping();
        }
      })
    );

    this.subscriptions.push(
      this.slidingPanelsService.shoppingCart$.subscribe((state) => {
        if (!state) {
          this.toggleShoppingCart(state);
        }
      })
    );

    this.subscriptions.push(
      this.slidingPanelsService.paymentMethod$.subscribe((state) => {
        if (state) {
          this.openPayment();
        }
      })
    );

    this.subscriptions.push(
      this.shirtService.getEditableShirt().subscribe((shirt) => {
        this.editableShirt = shirt;
      })
    );

    this.shippingInfoPanelWidth = this.shippingInfoPanel.nativeElement.offsetWidth;
    this.paymentMethodPanelWidth = this.paymentMethodPanel.nativeElement.offsetWidth;
  }

  ngOnDestroy(): any {
    if (this.subscriptions) {
      this.subscriptions.forEach(element => {
        element.unsubscribe();
      });
    }
    this.subscriptions = [];
  }

  onTabChanged(e): void {
    this.updateDesignCount(e.nextId);
  }

  openNewDesign(): void {
    this.showDesignShirt = true;
  }

  saveDesign(): void {
    if (this.designName !== '') {
      this.shirtService.getDesignCanvas().subscribe((canvas) => {
        let newShirt: Shirt = this.editableShirt;
        newShirt.canvasJSON = canvas.toDatalessJSON();
        newShirt.name = this.designName;
        this.shirtService.addShirt(newShirt);
        //this.router.navigateByUrl('/catalog');
        this.showDesignShirt = false;
        this.editableShirt = null;
      });
    }
  }

  toggleShoppingCart(state?: boolean): void {
    if (state !== undefined) {
      this.showShoppingCart = state;
    }
    else {
      if (!this.showShoppingCart) {
        this.showShoppingCart = true;
      } else {
        this.showShoppingCart = false;
      }
    }
  }

  openShipping(): void {
    this.showShippingInfo = true;
    this.renderer.setStyle(this.shoppingCartPanel.nativeElement,
      'right',
      this.shippingInfoPanelWidth + 'px');
  }

  openPayment(): void {
    this.showPaymentMethod = true;
    this.renderer.setStyle(this.shoppingCartPanel.nativeElement,
      'right',
      this.shippingInfoPanelWidth + this.paymentMethodPanelWidth + 'px');
    this.renderer.setStyle(this.shippingInfoPanel.nativeElement,
      'right',
      this.paymentMethodPanelWidth + 'px');
    this.renderer.setStyle(this.shippingInfoPanel.nativeElement,
      'border-left',
      '1px solid #CDCDCD');
  }

  closeAllPanels(): void {
    this.showShippingInfo = false;
    this.showShoppingCart = false;
    this.showPaymentMethod = false;
    this.setShoppingPanelOriginal();
    this.setShippingPanelOriginal();
  }

  closeAllButShoppingCart(): void {
    this.showShippingInfo = false;
    this.showPaymentMethod = false;
    this.showShoppingCart = true;
    this.setShoppingPanelOriginal();
    this.setShippingPanelOriginal();
  }

  closePaymentMethodPanel(): void {
    this.showPaymentMethod = false;
    this.renderer.setStyle(this.shoppingCartPanel.nativeElement,
      'right',
      this.shippingInfoPanelWidth + 'px');
    this.setShippingPanelOriginal();
  }

  checkedOut(): void {
    this.closeAllPanels();
    this.showPaymentComplete = true;
  }

  closePaymentComplete(): void {
    this.showPaymentComplete = false;
  }

  private updateDesignCount(tabId: string): void {
    const shirtGenderPipe: ShirtGenderPipe = new ShirtGenderPipe();
    switch (tabId) {
      case "tab-men-designs":
        this.designsCount = shirtGenderPipe.transform(this.shirts, 'M').length;
        break;
      case "tab-women-designs":
        this.designsCount = shirtGenderPipe.transform(this.shirts, 'F').length;
        break;
      case "tab-all-designs":
      default:
        this.designsCount = this.shirts.length;
    }
  }


  private setShoppingPanelOriginal(): void {
    this.renderer.removeStyle(this.shoppingCartPanel.nativeElement, 'right');
  }

  private setShippingPanelOriginal(): void {
    this.renderer.removeStyle(this.shippingInfoPanel.nativeElement, 'right');
    this.renderer.removeStyle(this.shippingInfoPanel.nativeElement, 'border-left');
  }
}
