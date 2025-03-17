import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartItem } from '../models/product.interface';
import { CartService } from '../services/cart.service';
import { CartHoverDirective } from '../directives/cart-hover.directive';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartHoverDirective],
  template: '<div class="cart"><h2>Shopping Cart</h2><div class="cart-items"><div *ngFor="let item of cartItems$ | async" class="cart-item" appCartHover><h3>{{item.name}}</h3><p>${{item.price}}</p><div class="quantity"><button (click)="updateQuantity(item.id, item.quantity - 1)">-</button><span>{{item.quantity}}</span><button (click)="updateQuantity(item.id, item.quantity + 1)">+</button></div><button (click)="removeItem(item.id)">Remove</button></div></div><div class="cart-total"><h3>Total: ${{getTotal()}}</h3></div></div>',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.getCartItems();
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity > 0) {
      this.cartService.updateQuantity(productId, quantity);
    }
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
}
