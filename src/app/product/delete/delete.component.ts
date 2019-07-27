import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/prod-service.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private cartService:ProductService) { }
  private products:IProduct[];
  ngOnInit() {
    let productId=+this.route.snapshot.paramMap.get("productId");
    this.deleteProduct(productId);
    
     
    
  }
     deleteProduct(productId)
  {
    this.cartService.deleteFromCart(productId);
      this.cartService.getitems().subscribe(p=>{
        console.log(p);
      this.products=p;
  });
  
}

}
