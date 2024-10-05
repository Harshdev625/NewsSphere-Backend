const express = require("express");
const { createUser, getUser } = require("../controllers/userController");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/createuser",
  [
    body("name").isLength({ min: 5 }).withMessage("Enter a valid name."),
    body("email").isEmail().withMessage("Enter a valid email."),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters."),
  ],
  createUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid email."),
    body("password").exists().withMessage("Password cannot be blank."),
  ],
  getUser
);

module.exports = router;
