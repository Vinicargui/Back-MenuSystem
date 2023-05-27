const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const promisify = require("util");

export default async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error:'token invalido'})
    }

    const [,token] = authHeader.split('') 

    try {

        const decoded = await promisify(jwt.verify(token,authConfig.secret))
        req.userId = decoded.id
        return next();

        if(token==authConfig){

        }
        
    } 
    catch (error) {
        return res.status(401).json({error:'token invalido'})
    }

  

};
