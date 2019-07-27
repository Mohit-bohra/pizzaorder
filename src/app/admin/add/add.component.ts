import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/product/product';
import { ProductService } from 'src/app/product/service/prod-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  products:IProduct[]=[];
  angForm:FormGroup
  constructor(private fb:FormBuilder,private pizzaService:ProductService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      productId:['',Validators.required],
      productName:['',Validators.required],
      price:['',Validators.required]
    });
  }
  addPizza(productId,productName,price){
    this.pizzaService.addProduct(productId,productName,price);
  }

}
