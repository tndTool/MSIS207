import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../model/user";
from ("dotenv").config();

export default login =  async (req, res) => {

    const { tel_or_email, password: plainTextPassword} = req.body
    //no value entered  
    if (!plainTextPassword || !tel_or_email) {
      return res.json({status: 'error', error: 'Invalid email/ password'})
    }
    else {  
      existingEmail = await User.findOne({ Email: tel_or_email });
        const validPassword = await bcrypt.compare(plainTextPassword, existingEmail.Password)
        //enter wrong email or password 
        if ( !existingEmail || !validPassword) {
          return res.json({status: 'error', error: 'Incorrect email or password'}) }
        //In case the username, password is entered correctly
        else {
          const token = jwt.sign({
            id: existingEmail.id, 
            Email: existingEmail.Email
          },
          process.env.JWT_SECRET,{
          expiresIn: process.env.JWT_EXPIRES
          })
          const cookie_option = {
            expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES *24 *60 *60 *1000),
            httpOnly: true,
            secure: false
          }
          res.cookie('userRegister', token, cookie_option)
          return res.json({status: 'ok', success: 'Logged in successfully', data: token})

        }
    }
  }