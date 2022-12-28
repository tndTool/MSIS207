import express from "express";
import { addAccessoriesCategory, addAccessoriesColor, addAccessoriesSize, getAccessoriesCategory, getAccessoriesColor, getAccessoriesSize } from "../controllers/accessories.js";


const router = express.Router();


/**
     * @api {POST} /api/accessories/accessories-category Create a accessories product
     * @apiVersion 1.0.0
     * @apiName Create a accessories product
     * @apiGroup Product
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
router.post("/accessories-category", addAccessoriesCategory);

/**
     * @api {POST} /api/accessories/accessories-category Create a accessories category
     * @apiVersion 1.0.0
     * @apiName Create a accessories category
     * @apiGroup Accessories
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

router.post("/accessories-color", addAccessoriesColor);

/**
     * @api {POST} /api/accessories/accessories-size Create a accessories size
     * @apiVersion 1.0.0
     * @apiName Create a accessories size
     * @apiGroup Accessories
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

router.post("/accessories-size", addAccessoriesSize);

/**
     * @api {POST} /api/accessories/accessories-color Create a accessories color
     * @apiVersion 1.0.0
     * @apiName Create a accessories color
     * @apiGroup Accessories
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

router.get("/accessories-category", getAccessoriesCategory);

router.get("/accessories-color", getAccessoriesColor);

router.get("/accessories-size", getAccessoriesSize);

export default router;