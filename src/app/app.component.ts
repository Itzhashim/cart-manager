import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './cart/product-list/product-list.component';
import { CartComponent } from './cart/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent, CartComponent],
  template: `
    <div class="container">
      <h1>Shopping Cart Demo</h1>
      <div class="layout">
        <app-product-list></app-product-list>
        <app-cart></app-cart>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping Cart';
} 