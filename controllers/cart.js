const Cart = require("../models/Cart");

//CREATE

const routes = {
  createCart: async (req, res) => {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE
  updatedCart: async (req, res) => {
    console.log("aaaaaaaaaaaa    " + req.params.id);
    console.log("bbbbbbbbbbbbbbbbb    " + req.body.userId);
    try {
    
      console.log(req.body.cart);
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body.cart,
        },
        { upsert: true, new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE
  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET User Cart
  getUserCart: async (req, res) => {
    try {
      console.log(
        "00000000000000000000 ================  ====" + req.params.userId
      );
      console.log("00000000000000000000 ============   ====" + req.params);
      const cart = await Cart.findOne({ userId: req.params.id });
      console.log(cart.products);
      res.status(200).json(cart.products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // //GET ALL

  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = routes;
