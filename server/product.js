//include mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
// Create collection using schema


    var Product=new Schema({
        productId:{type:Number},
        productName:{type:String},
        Available:{ type:String},
        price:{type:Number},
        Spicy:{type:String},
        category:{type:String}
        
    },{
    collection:'product'
});

module.exports=mongoose.model("Product",Product);



