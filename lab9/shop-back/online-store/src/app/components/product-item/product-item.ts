import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  onDelete() {
    this.deleteProduct.emit(0);
  }

  share() {
    const msg = encodeURIComponent(`Попробуй "${this.product.name}" в Café Aroma! Цена: ${this.product.price}₸`);
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  }

  getStars(rating: number): string {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(rating));
  }
}