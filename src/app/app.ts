import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Product, ProductService } from "./services/product";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule],
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
