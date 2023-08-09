const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUser = async (req, res) => {
  body("name", "Enter a valid name").isLength({ min: 5 });
  body("email", "Enter a valid email").isEmail();
  body("password", "Password must be at least 5 characters").isLength({
    min: 5,
  });

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry a user already exists with this email." });
    }
    user = await User.create({
      name: req.body.name,
      password: await bcrypt.hash(req.body.password, saltRounds),
      email: req.body.email,
    });
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

const getUser = async (req, res) => {
  body("email", "Enter a valid email").isEmail();
  body("password", "Password cannot be blank").exists();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        error: "Please try to login with correct credentials",
      });
    }
    const passwordchecker = bcrypt.compareSync(password, user.password);
    if (!passwordchecker) {
      return res.status(400).json({
        error: "Please try to login with correct credentials",
      });
    }
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error.");
  }
};

module.exports = {
  createUser: createUser,
  getUser: getUser,
};
