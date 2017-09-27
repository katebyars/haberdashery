import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { PRODUCTS } from './mock-products';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
  }

  getProducts(){
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  getProductById(productId: number){
    return this.database.object('products/' + productId);
  }

  updateProduct(localUpdatedProduct){
    var productEntryinFirebase = this.getProductById(localUpdatedProduct.$key);
    productEntryinFirebase.update({category: localUpdatedProduct.category,
    model: localUpdatedProduct.model,
    brand: localUpdatedProduct.brand,
    price: localUpdatedProduct.price});
  }

}
