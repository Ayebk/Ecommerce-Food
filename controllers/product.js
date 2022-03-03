
const Product  = require("../models/Product");

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const routes = {

//CREATE

createProduct:async (req,res)=>{
    const newProduct = new Product(req.body);
    console.log("llllllaaaaaaaaaaaa =======  " + JSON.stringify(req.body))
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err);
    }
},





//UPDATE 
updatedProduct: async(req,res)=>{
    console.log("tttttttttttttttttttttt ---------   " +  JSON.stringify(req.body) )
    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
        }, {new:true});
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err);
    }
},

//DELETE
deleteProduct: async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")

    }catch(err){
        res.status(500).json(err)

    }
},

//GET Product
getProduct: async(req,res)=>{

    
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);

    }catch(err){
        res.status(500).json(err)

    }
},

//SEARCH Products
searchProduct: async(req,res)=>{

    const text = req.params.text;
    const regex = new RegExp(escapeRegex(text), 'gi');
    try{

        const products = await Product.find({ "title": regex }).sort('-createdAt').then((products) => {
            res.status(200).json({
                products
            })
        })

        // const product = await Product.findById(req.params.text)


    }catch(err){
        res.status(500).json(err)

    }
},



//GET ALL Products
getAllProducts: async(req,res)=>{
    const qNew = req.query.new
    const qCategory = req.query.category
    try{
        
        let products;

        if(qNew){
            products = await Product.find().sort({ createdAt:-1}).limit(5);
        } else if (qCategory){
            products = await Product.find({
                categories:{
                    $in: [qCategory],
                },
            });
        }else{
            products = await Product.find();
        }

      
        res.status(200).json(products);

    }catch(err){
        res.status(500).json(err)

    }
}



}


module.exports = routes;