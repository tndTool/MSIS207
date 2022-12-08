const express = require("express");
const loggedin = require("../controllers/loggedin");
// const logout = require ('../controllers/logout');
const router = express.Router();

router.get("/", loggedin, (req, res) => {
  if (req.user) {
    res.render("index", { isLoggedIn: req.isLogged, user: req.user });
  } else {
    res.render("index", { isLoggedIn: null, user: "nothing" });
  }
});

// router.get('/register', (req, res) => {
//     res.render('register');
// })
// router.get('/login', (req, res) => {
//     res.render('login');
// })
// router.get('/logout', logout);
// router.get('/home', (req, res) => {
//     res.render('index')
// })
module.exports = router;
