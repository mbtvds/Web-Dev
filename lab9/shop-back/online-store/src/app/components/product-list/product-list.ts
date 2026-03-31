import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];
  displayedProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      this.displayedProducts = [...this.products];
    }
  }

  onDelete(index: number) {
    console.log('removing index', index);
    this.displayedProducts.splice(index, 1);
    this.displayedProducts = [...this.displayedProducts];
  }
}