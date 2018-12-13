import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/domain/iproduct';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  productId: number; // Id à récupèrer la route
  product: IProduct;

  constructor(private _route: ActivatedRoute,
    private _service: ProductsService) { }

  ngOnInit() {
    this._service.getProductById(5).subscribe(
      res2 => this.product = res2,
      err => console.log('ATTENTION, Il y a eu l\'exception : ' + err),
      () => {
        console.log('hello'); }
    );
    // this.productId = +this._route.snapshot.paramMap.get('id');
    this._route.paramMap.subscribe(
      res => {
        this.productId = +res.get('id');
      },
      err => console.log('ATTENTION, Il y a eu l\'exception : ' + err),
      () => {
        console.log('hello');
        this._service.getProductById(this.productId).subscribe(
          res2 => this.product = res2,
          err => console.log('ATTENTION, Il y a eu l\'exception : ' + err)
        );
      }
      )
      ;
  }

}
