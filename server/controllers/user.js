import User from '../model/user.js';
import nodemailer from 'nodemailer';
import { where } from 'sequelize';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tranluongtiensi@gmail.com',
        pass: 'vcobnhmpqjcnztov',
    },
});

export const updateUser = async (req, res) => {
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const id = req.body.id;
    try {
        await User.update(
            {
                Firstname: firstname,
                Lastname: lastname,
            },
            {
                where: { id },
            },
        );
        const result = await User.findAll({ raw: true });
        const { Password, ...other } = result[0];
        res.status(200).send(other);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const sendPasswordLink = async (req, res) => {
    const email = req.body.email;
    const existingEmail = await User.findOne({ where: { Email: email } }, { raw: true });
    if (existingEmail) {
        const mailOptions = {
            from: 'tranluongtiensi@gmail.com', // sender address
            to: email, // list of receivers
            subject: 'Password Reset Request for Taturoshop', // Subject line
            text: `Hello ${existingEmail.Lastname},`,
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <div style="display: block; margin: 0px auto; width: 700px; height: 500px;">
                    <img src="https://res.cloudinary.com/dw8ilqth2/image/upload/v1669807030/logo_mwaet4_f0vgnl.png"
                     style="height: 50px; width: 150px; margin: 0 auto; display: block; padding: 20px 20px;" alt="">
                    <h2 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 18px; font-weight: normal;">Hey ${existingEmail.Lastname}</h2>
                    <p style="width: 500px; display: block; margin: 0px auto;">Your password can be reset by clicking the button below. If you did not request a new password, please ignore this email.</p>
                    <a href="http://localhost:3000/newpassword" 
                    style=" 
                    display: inline-block;
                    padding: 10px 10px;
                    text-align: center;
                    text-decoration: none;
                    outline: none;
                    background-color: rgb(9, 9, 9); 
                    color: rgb(238, 232, 232); 
                    cursor: pointer; 
                    border-radius: 2px;
                    text-decoration: none;
                    margin: 20px 20px;">Reset Password</a>
                </div>
            </body>
            </html>`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('error', error);
                res.status(400).json({ message: 'email not send' });
            } else {
                console.log('email sent', info.response);
                res.status(200).json(info.response);
            }
        });
    } else {
        res.status(400).json('Email not found');
    }
};

export const getUsers = async (req, res) => {
    try {
        const result = await User.findAll({ raw: true });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};
