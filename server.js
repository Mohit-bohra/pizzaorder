//include modules
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const path=require('path');
const apiProdRouter=require('./server/api-product.route');
const app=express();
//config of database
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    ()=>console.log("Database Connected"),
    (err)=>console.log("Failed to connect")
);

//Handling static resource and api call
app.use(bodyparser.json());
app.use(cors());
//public :folder which contains all static resources(.html,css)
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    //res.send("welcome to express");
    res.sendFile("index.html")
});
app.use('/product',apiProdRouter);

app.listen(4000,()=>{console.log("server listening at 4000")});

