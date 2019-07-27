const express=require('express');
const app=express();
//we are creating api link for product
const apiProdRouter=express.Router();
let Product=require('./product');
//user add
apiProdRouter.route('/add').get((req,res)=>{
    
    let body_order=new Product(req.body);
    body_order.save().then(
        ()=>{res.send("New Order")},(err)=>{res.send("Failure")}
    );
});


//admin list 
apiProdRouter.route('/admin/allProd').get((req,res)=>{
    
    Product.find((err,data)=>{
         if(err){
             res.send("Failure");
         }
         res.send(data);
     });
 });

//admin delete
apiProdRouter.route('/admin/delete/:productId').delete((req,res)=>{
    
    let p_pizzaId=req.params.productId;
    Product.findOneAndDelete({productId:p_pizzaId},(err,data)=>{
        if(err) res.send("Deleted data"+p_pizzaId);
        res.send(data);
    });
});

//admin add
apiProdRouter.route('/admin/addProd').post((req,res)=>{
    
    let body_product=new Product(req.body);
    body_product.save().then(
        ()=>{res.send("new order")},(err)=>{res.send("Failure")}
        );
    });
//admin update 
apiProdRouter.route('/update/:productId/:price').put((req,res)=>{
    let p_productId=req.params.productId;
    let p_price=req.params.price;
    Product.findOneAndUpdate({productId:p_productId},{price:p_price},(err,data)=>{
        if(err)res.send("Failed to update");
        res.send("Updated Records for"+p_productId+"as"+p_price);
        
    });
});
    // //single
    // apiProdRouter.route('/admin/:productId').get((req,res)=>{
    //         let p_productId=req.params.productId;
    //         Product.find({productId:p_productId},(err,data)=>{
    //             if(err) res.send("Failed to load for"+p_productId);
    //             res.send(data);
    //         });
    // });
    

//user list 
apiProdRouter.route('/allProd').get((req,res)=>{
    
    Product.find((err,data)=>{
         if(err){
             res.send("Failure");
         }
         res.send(data);
     });
 });


 
module.exports=apiProdRouter;
