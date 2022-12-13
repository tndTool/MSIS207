
import bcrypt from "bcryptjs";
import User from "../model/user";


export default register = async (req, res) => {
      // const {
      //   username, 
      //   password: plainTextPassword, 
      //   password_confirmation: someOtherPlaintextPassword, 
      //   tel_or_email,
      // } = req.body
      const username = req.body.username;
      const email = req.body.email
      const password = req.body.password;
      const re_password = req.body.password
      
      if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username'});
         
      }
      if (!plainTextPassword || typeof someOtherPlaintextPassword !== 'string') {
         return res.json({ status: 'error', error: 'Invalid password'});
      }
      existingEmail = await User.findOne({ Email: tel_or_email });
      if (existingEmail) {
          const validPassword = await bcrypt.compare(plainTextPassword, existingEmail.Password) 
          const validPasswordConfirmation =  await bcrypt.compare(someOtherPlaintextPassword, existingEmail.Password)
          if ( validPassword && validPasswordConfirmation && tel_or_email == existingEmail.Email && username == existingEmail.Name) {
              return res.json({status: 'ok', success: 'Email already in use please login'})
          }
        res.json({
          status: "error",
          error: "email is already in use, please enter another email",
        });
        } else {
          const password = await bcrypt.hash(plainTextPassword, 10);
          const user = new User({
            Name: username,
            Email: tel_or_email,
            Password: password,
          });
          user.save((error, result) => {
            if (error) console.log(error);
            console.log(result);
          });

          return res.json({ status: "ok", success: "user successfully created" });
        }

    };
