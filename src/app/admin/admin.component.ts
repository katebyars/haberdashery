import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})
export class AdminComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  submitForm(category: string, model: string, brand: string, price: number) {
    var newProduct: Product = new Product(category, model, brand, price);
    this.productService.addProduct(newProduct);
  }

}
