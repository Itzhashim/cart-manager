import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="product-list"><div class="product-card" *ngFor="let product of products"><h3>{{product.name}}</h3><p>{{product.description}}</p><p class="price">${{product.price}}</p><button (click)="addToCart(product)">Add to Cart</button></div></div>',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 99.99, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 149.99, description: 'Description 2' },
    { id: 3, name: 'Product 3', price: 199.99, description: 'Description 3' },
  ];

  constructor(private cartService: CartService) { }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
