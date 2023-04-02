const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

//middleware function where we can add this to routes we want to be protected
module.exports = function(req, res, next){
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send('Access Denied')
    }

    try{
        const verified = jwt.verify(token, process.env.TOKENSECRET)
        req.user = verified
        next()
    } catch(err){
        res.status(400).send('Invalid Token')
    }
}

