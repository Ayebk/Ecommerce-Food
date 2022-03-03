const jwt = require("jsonwebtoken")


const verfityToken = (req,res,next) =>{
    const authHeader = req.headers.token
    console.log(" 0000000000000   " + req.headers.token)
    if(authHeader) {

        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SEC, (error, user)=>{
            if(error){
                res.status(403).json("Token is not valid!")
            } 
            req.user = user;
            console.log("1111111111111111   "+ req.user)
            console.log("2222222222222222   "+ user)
            next();
        });
    } else {
        return res.status(401).json("Your not authenticated!")
    };
};

const verifyTokenAndAuthorization = (req,res,next)=>{


    verfityToken(req,res,()=>{
        console.log("0002222222-------   "+ req)
        console.log("00000000000000000-------   "+ req.user)
        console.log("aaaaaaaaaaaaaaaa HEADERS  " + req.user.id)
        console.log("aaaaaaaaaaaaaaaa PARAMS   " + req.params.id)
        console.log("aaaaaaaaaaaaaaaa PARAMS   " + req.params)
        console.log("00000000000000000000 ============  " + req.params.userId)
        for (let x in req.params) {
            console.log(x)
          };
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("Your are not allowed to do that!")
        }
    })
}

//ADMIN
const verifyTokenAndAdmin = (req,res,next)=>{
    verfityToken(req,res,()=>{
        if ( req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("Your are not allowed to do that!")
        }
    })
}

module.exports = {verfityToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}