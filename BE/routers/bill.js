import express from "express";
import { createBill } from "../controllers/bill.js";

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
     * @apiBody {String} required_variable email Email of User
     * @apiBody {String} required_variable password Password of User
     * 
     *
     * @apiSuccess {Number} required_variable id The new User-ID
     * @apiSuccess {String} required_variable username The new User-Username
     * @apiSuccess {String} required_variable email The new User-Email
     * @apiSuccess {Boolean} required_variable isAdmin The new User-isAdmin
     * @apiSuccessExample Success-Response:
     *     {
     *    "_id": "63a5f58970113e3fed99908e",
     *     "Name": "tranluongtiensi",
     *     "Email": "tranluongtiensi@gmail.com",
     *     "__v": 0,
     *     "Firstname": "Sĩ",
     *     "Lastname": "Trầnn"
     *     }
     * @apiError required_variable Emptypaswordoremailnotallowed Username or email or password empty
     * @apiError required_variable Invalidemailaddress email not correct
     * @apiError required_variable EmailInUse Email have already user in use
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
     * @apiBody {String} required_variable email Email of User
     * @apiBody {String} required_variable password Password of User
     * 
     *
     * @apiSuccess {Number} required_variable id The new User-ID
     * @apiSuccess {String} required_variable username The new User-Username
     * @apiSuccess {String} required_variable email The new User-Email
     * @apiSuccess {Boolean} required_variable isAdmin The new User-isAdmin
     * @apiSuccessExample Success-Response:
     *     {
     *    "_id": "63a5f58970113e3fed99908e",
     *     "Name": "tranluongtiensi",
     *     "Email": "tranluongtiensi@gmail.com",
     *     "__v": 0,
     *     "Firstname": "Sĩ",
     *     "Lastname": "Trầnn"
     *     }
     * @apiError required_variable Emptypaswordoremailnotallowed Username or email or password empty
     * @apiError required_variable Invalidemailaddress email not correct
     * @apiError required_variable EmailInUse Email have already user in use
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
     * @apiBody {String} required_variable email Email of User
     * @apiBody {String} required_variable password Password of User
     * 
     *
     * @apiSuccess {Number} required_variable id The new User-ID
     * @apiSuccess {String} required_variable username The new User-Username
     * @apiSuccess {String} required_variable email The new User-Email
     * @apiSuccess {Boolean} required_variable isAdmin The new User-isAdmin
     * @apiSuccessExample Success-Response:
     *     {
     *    "_id": "63a5f58970113e3fed99908e",
     *     "Name": "tranluongtiensi",
     *     "Email": "tranluongtiensi@gmail.com",
     *     "__v": 0,
     *     "Firstname": "Sĩ",
     *     "Lastname": "Trầnn"
     *     }
     * @apiError required_variable Emptypaswordoremailnotallowed Username or email or password empty
     * @apiError required_variable Invalidemailaddress email not correct
     * @apiError required_variable EmailInUse Email have already user in use
     * @apiErrorExample Error-Response:
     *     {
     *         "We cannot find an account with that email address"
     *     }
     */

export default router;