const express = require("express");
const {
  fetchAllArticles,
  addArticle,
  deleteArticle,
} = require("../controllers/articleController");
const { body } = require("express-validator");
const authenticateToken = require("../middleware/auth"); // Adjust path as needed

const router = express.Router();

router.get("/savedarticles", authenticateToken, fetchAllArticles); // Add middleware here
router.post(
  "/addarticle",
  [
    body("title").notEmpty().withMessage("Title is required."),
    body("url").notEmpty().isURL().withMessage("A valid URL is required."),
  ],
  addArticle
);
router.delete("/deletearticle/:id", deleteArticle);

module.exports = router;
