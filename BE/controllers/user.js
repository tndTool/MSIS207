import User from "../model/user.js";

export const updateUser = async (req, res) => {
    const firstname = req.body.firstName;
    const lastname =  req.body.lastName;
    const id = req.body._id;
    try {
        const result = await User.findByIdAndUpdate(id, {
            Firstname: firstname, 
            Lastname: lastname}, 
            {
            new: true
        })
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
    // return res.status(200).json("update success")
  }