import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/service/prod-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class ADeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute,private pizzaService:ProductService) { }

  ngOnInit() {
    console.log("sz");
    let productId=this.route.snapshot.paramMap.get("productId");
    this.deletePizza(productId);
  }
  deletePizza(productId):any
  {
    console.log("sz");
    this.pizzaService.deletePizza(productId);
  }
}
