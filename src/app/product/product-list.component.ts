import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './service/prod-service.service';

@Component({
    selector:'pz-products',
    templateUrl:'./product-list.component.html',
    styleUrls :['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    imageURL:string="http://ifcrestaurants.com/shop-admin/images/products/qN87xnvDM30cFw6Abk.png";
    logoUrl:string ="../images/logo.png";
    productCart:IProduct[]=[];
    products: IProduct[]=[]
    pageTitle:String = 'Welcome To Dominos';
    imageWidth: number = 50;
    imageMargin: number =2;
    filteredProducts: IProduct[];
    orderedProducts:IProduct[];
   _listFilter:string;
   _orderFilter:number;
    marked = false;
    theCheckbox = false;
    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    get orderFilter(): number{
        return this._orderFilter;
      }
    set orderFilter(value:number){
          this._orderFilter=value;
          
      }
        /*{
            "productId":1,
            "productName":"Mexican Treat",
            "Available":"Yes",
            "price":420,
            "Spicy":2,
            "category":"vegan",
           "imageUrl":"http://ifcrestaurants.com/shop-admin/images/products/qN87xnvDM30cFw6Abk.png"
           //"value": 1           
            
        },
        {
            "productId":2,
            "productName":"Italiano Treat",
            "Available":"Yes",
            "price":300,
            "Spicy":3,
            "category":"non-veg",
            "imageUrl":"http://www.italb.co.uk/images/pizza.jpg"
            //"value": 2
        },
        {
          "productId":3,
          "productName":"Pepperoni Style",
          "Available":"Yes",
          "price":440,
          "Spicy":3,
          "category":"non-veg",
          "imageUrl":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=450&c=sc&poi=face&q=85"
          //"value": 3
      },
      {
        "productId":4,
        "productName":"Tandoori Paneer",
        "Available":"Yes",
        "price":460,
        "Spicy":2,
        "category":"vegan",
        "imageUrl":"https://www.fastlanepizza.com/content/images/thumbs/0000302_tandoori-chicken-pizza_300.jpeg"
        //"value": 4
    }
    ];*/

    constructor(private route:ActivatedRoute,cartService:ProductService ){
        this.filteredProducts = this.products;
        this.listFilter='';
        this.cartService=cartService;
       
    }
    performFilter(filterBy: string): IProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
        product.category.toLocaleLowerCase().indexOf(filterBy)!==-1);
      
    }
    cartService:ProductService;
    toggleVisibility(product){
            console.log("Selected Product " +product.productId);
            this.productCart.push(product);  
            this.cartService.addToCart(product);

      }

    changevalue():any{
     return 
    }
     ngOnInit() {
    this.cartService.getProducts().subscribe(productList=>this.products=productList);

          }
}