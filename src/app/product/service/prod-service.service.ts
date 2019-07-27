
import { IProduct } from 'src/app/product/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ProductService{
    
    uri='http://localhost:4000/product';

    constructor(private httpClient:HttpClient){ }
    items:IProduct[]=[];
     
    
    //list for order user
    addToCart(product){
        this.items.push(product);
    }
    deleteFromCart(productId){
        this.items.pop();
    }
    
    //array get
    public getitems():Observable<IProduct[]>
    {
        return of(this.items);
    }

  
     //get from cart  
    getOrder():Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(`${this.uri}`+'/addprod');
    }
    //display the list
    getProducts():Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(`${this.uri}`+'/allProd');
    }
    //list for admin
    getPizzas():Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(`${this.uri}`+'/admin/allProd');
    }
    //delete for admin
    deletePizza(productId:number){
        console.log("enter");
        this.httpClient.delete(`${this.uri}`+'/admin/delete/'+`${productId}`).subscribe(res=>console.log("Deleted record"));

     }
    //add for admin
    addProduct(id,name,price){
        let prod={
            productId:id,
            productName:name,
            price:price
        };
        return this.httpClient.post(`${this.uri}`+'/admin/addProd',prod).subscribe(res=>console.log("New Product Registered"));
    }
    //update for admin
    updateProduct(empId:any,price:any)
    {
       
        return this.httpClient.put(`${this.uri}`+'/update/'+empId+'/'+price,{}).subscribe(res=>console.log("done"));
              
      } 
    


}