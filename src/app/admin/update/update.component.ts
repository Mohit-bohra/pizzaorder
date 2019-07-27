import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/service/prod-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input()
  product:IProduct;
  constructor(private route:ActivatedRoute,private pizzaService:ProductService) { }

  ngOnInit() {
  }
  updateProduct(productId:any,price:any) 
  {
    this.pizzaService.updateProduct(productId,price);
  }


}
