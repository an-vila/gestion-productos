import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Product, ProductService } from "./services/product";
import { ProductsListComponent } from "./components/products-list/products-list";
import { ProductFormComponent } from "./components/product-form/product-form";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, ProductsListComponent, ProductFormComponent],
	templateUrl: "./app.html",
})

export class AppComponent {

  constructor (private productService: ProductService){
    this.productService.cargarProductos().subscribe(
      (datos: Product[]) => {
        console.log('Productos cargados desde la API:', datos);
      }
    );
  }

  onProductoCreado(producto: any) {
      console.log('Producto recibido desde el formulario:', producto);
  }
}
