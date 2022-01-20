
const Order = require("../models/Order");
const router = require("express").Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verfityToken } = require("./verfiyToken")
const CryptoJS = require("crypto-js");

const { createOrder, updatedOrder, deleteOrder, getUserOrder, getAllOrders, getMonthIncome} = require("../controllers/order")

//CREATE

router.post("/", verfityToken, // verfityToken <---- any users and make a cart... 
createOrder)



//UPDATE 
router.put("/:id", verifyTokenAndAdmin, updatedOrder);

//DELETE
router.delete("/:id", verifyTokenAndAdmin,deleteOrder)

//GET User Cart
router.get("/find/:userId", verifyTokenAndAuthorization,getUserOrder)


// //GET ALL 

router.get("/", verifyTokenAndAdmin,getAllOrders)

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin,getMonthIncome);

module.exports = router;