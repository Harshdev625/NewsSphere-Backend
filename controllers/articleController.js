const Article = require("../models/Article");
const { validationResult } = require("express-validator");

const fetchAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({ user: req.query.user });
    res.json(articles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

const addArticle = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const newArticle = new Article(req.body);
  try {
    const savedArticle = await newArticle.save();
    res.json(savedArticle);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.json({ message: "Article deleted", article });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
};

module.exports = { fetchAllArticles, addArticle, deleteArticle };
