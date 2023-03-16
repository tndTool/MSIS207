import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();


/**
     * @api {POST} /api/auth/register Create a new User
     * @apiVersion 1.0.0
     * @apiName create
     * @apiGroup User
     * @apiPermission everyone
     * 
     * @apiDescription Create user by admin or moderator
     * 
     * @apiBody {String}  username Nick name of User.
     * @apiBody {String}  email Email of User
     * @apiBody {String}  password Password of User
     * @apiBody {String}  re_password Confirm Password of User
     *
     * @apiSuccess {Number}  id The new User-ID
     * @apiSuccess {String}  username The new User-Username
     * @apiSuccess {String}  email The new User-Email
     * @apiSuccess {Boolean}  isAdmin The new User-isAdmin
     * @apiSuccessExample Success-Response:
     * {
     *  "_id": "63ac325c961e0f55105982fa",
     *  "name": "tranluongtiensi",
     *  "email": "tranluongtieffnsi@gmail.com",
     *  "isAdmin": false
     * }
     * @apiError  Emptypaswordoremailnotallowed Username or email or password empty
     * @apiError  Invalidemailaddress email not correct
     * @apiError  EmailInUse Email have already user in use
     * @apiErrorExample Error-Response:
     *     {
     *         "email is already in use, please enter another email"
     *     }
     * @apiSampleRequest http://localhost:8800/api/auth/register
     */
router.post("/register", register);
  /**
     * @api {POST} /api/auth/login Login a User
     * @apiVersion 1.0.0
     * @apiName Login a User
     * @apiGroup User
     * @apiPermission everyone
     * 
     * @apiDescription Login user by admin or moderator
     * 
     * @apiBody {String}  email Email of User
     * @apiBody {String}  password Password of User
     * 
     *
     * @apiSuccess {Number}  id The new User-ID
     * @apiSuccess {String}  username The new User-Username
     * @apiSuccess {String}  email The new User-Email
     * @apiSuccess {Boolean}  isAdmin The new User-isAdmin
     * @apiSuccessExample Success-Response:
     *     {
     *    "_id": "63a5f58970113e3fed99908e",
     *     "Name": "tranluongtiensi",
     *     "Email": "tranluongtiensi@gmail.com",
     *     "__v": 0,
     *     "Firstname": "Sĩ",
     *     "Lastname": "Trầnn"
     *     }
     * @apiError  Emptypaswordoremailnotallowed Username or email or password empty
     * @apiError  Invalidemailaddress email not correct
     * @apiError  EmailInUse Email have already user in use
     * @apiErrorExample Error-Response:
     *     {
     *         "We cannot find an account with that email address"
     *     }
     * @apiSampleRequest http://localhost:8800/api/auth/login
     */
router.post("/login", login);
router.post("/logout", logout);

export default router;