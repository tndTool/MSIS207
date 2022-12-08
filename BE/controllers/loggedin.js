const User = require ('../model/user')
const jwt = require ('jsonwebtoken')
const loggedin = (req, res, next) => {
    if (!req.cookies.userRegister) return next();
    try {
        const decode = jwt.verify(req.cookies.userRegister, process.env.JWT_SECRET)
        User.findById({_id: [decode.id]}, (error, result) => {
        if (error) return next();
        req.user = result;
        req.isLogged = true;
        return next();
        }); 
    } catch (error) {
        if(error) return next()
    }
}
module.exports = loggedin