import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  constructor(private router: Router){}

  products: Product[] = [
    new Product("Hat", "Sugar Blues", "Goorin Bros", 140, 1),
    new Product("Hat", "White Rabbit", "Goorin Bros", 130, 2),
    new Product("Hat", "JB Harlow", "Goorin Bros", 60, 3),
    new Product("Hat", "Papou", "Goorin Bros", 70, 4),
    new Product("Hat", "Mrs. Blanc", "Goorin Bros", 60, 5),
    new Product("Hat", "Becky Jones Cloche", "Goorin Bros", 55, 6),
    new Product("Accessory", "Goorin Hat Box Medium", "Goorin Bros", 14, 7),
    new Product("Bulk Coffee", "Tanganyika Blend", "Missionary's Choice", 12, 8),
    new Product("Bulk Tea", "Frishtik Black", "Rusofsky Brewers", 9, 9),
    new Product("Tea Cookies", "Madelines", "Allons-y", 70, 10),
  ];

  gotToDetailPage(clickedProduct: Product){
    this.router.navigate(['products', clickedProduct.id]);
  }

}
