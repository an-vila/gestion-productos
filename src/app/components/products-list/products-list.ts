import { Component } from '@angular/core';
import { Product, ProductService } from "../../services/product";
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})

export class ProductsListComponent {

  productos: Product[] = [];

    constructor(private productService: ProductService) {
    this.productService.productos$.subscribe(productos => {
    this.productos = productos;
      console.log('Productos recibidos:', productos);
    });
  }
}
