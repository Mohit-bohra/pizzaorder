import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../service/prod-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
    private products:IProduct[];
    constructor(private prodService:ProductService,private route:ActivatedRoute) {                }
    ngOnInit() {    
      this.prodService.getitems().subscribe(p=>{console.log(p);
      this.products=p;
      });      
      console.log(this.products)
    }
  }