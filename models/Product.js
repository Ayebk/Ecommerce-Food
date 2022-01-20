const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({

    title:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    details:{type:String, required:true},
    price:{type: Number, required:true},
    priceExtra:{type: Number},
    priceDesc:{type:String},
    brand:{type: String, required:true},
    categories: {type: Array},
    img:{type:String}
    
    

 },{timestamps: true});

 module.exports = mongoose.model("Product",ProductSchema)