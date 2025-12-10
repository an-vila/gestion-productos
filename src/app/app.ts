import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Product, ProductService } from "./services/product";
import { ProductsList } from "./components/products-list/products-list";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, ProductsList],
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
}
