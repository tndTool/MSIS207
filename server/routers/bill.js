import express from "express";
import { createBill, getAll } from "../controllers/bill.js";

const router = express.Router();

/**
     * @api {POST} /api/bill/checkout Create a Bill
     * @apiVersion 1.0.0
     * @apiName Create a Bill
     * @apiGroup Bill
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
     */
router.post("/checkout", createBill);

/**
     * @api {POST} /api/bill/checkout Update a bill
     * @apiVersion 1.0.0
     * @apiName Update a bill
     * @apiGroup Bill
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
     */

/**
     * @api {POST} /api/bill/checkout Delete a bill
     * @apiVersion 1.0.0
     * @apiName Delete a bill
     * @apiGroup Bill
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
     */
     router.get("/getall", getAll);

export default router;