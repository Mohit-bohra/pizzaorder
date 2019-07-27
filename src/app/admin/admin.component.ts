import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/product';

import { ProductService } from '../product/service/prod-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: IProduct[]=[];
  selectedProd:IProduct;

  constructor(private route:ActivatedRoute,private pizzaService:ProductService) { }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(productList=>this.products=productList);
  }

  onSelection(product:IProduct){
    this.selectedProd=product;
  }

}
