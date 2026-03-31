import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { CATEGORIES, PRODUCTS } from './data/products.data';
import { Category, Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  selectedCategory: Category = CATEGORIES[0];
  allProducts: Product[] = PRODUCTS;

  get filteredProducts(): Product[] {
    return this.allProducts.filter(p => p.categoryId === this.selectedCategory.id);
  }

  selectCategory(cat: Category) {
    this.selectedCategory = cat;
  }
}