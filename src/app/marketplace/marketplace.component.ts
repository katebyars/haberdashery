import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ProductService]
})
export class MarketplaceComponent implements OnInit {
  products: Product[];

  constructor(private router: Router, private productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.getProducts();
  }

  gotToDetailPage(clickedProduct: Product){
    this.router.navigate(['products', clickedProduct.id]);
  }

}
