const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const jwt = require("jsonwebtoken");
const isAuth = require("../middleware/isAuth");
const { login, loginPage } = require("../controllers/userController");

router.use(isAuth);

// /login :post methode
router.post(
  "/",
  [
    body("email")
      .isEmail()
      .withMessage("this field should be a valid email")
      .trim()
      .escape(),
    body("password")
      .isString()
      .withMessage("this field must be a string")
      .isLength({ min: 4, max: 8 })
      .withMessage("password must be between 4 and 8 caracters")
      .trim()
      .escape(),
  ],
  login,
);
// /login :get methode
router.get("/", loginPage);

module.exports = router;
