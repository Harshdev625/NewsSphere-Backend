const Article = require("../models/article");
const { body, validationResult } = require("express-validator");

const fetchAllarticles = async (req, res) => {
    try {
      const userId = req.query.userId; // Get the userId from the query parameter
      const articles = await Article.find({ user: userId });
      res.json(articles);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  

const addArticle = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { userId, title, description, url, urlToImage, publishedAt, content } = req.body; 
      const newArticle = new Article({
        user: userId, 
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
      });
      const savedArticle = await newArticle.save();
      res.json(savedArticle);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  

  const deleteArticle = async (req, res) => {
    try {
      const articleId = req.params.id;
  
      let article = await Article.findById(articleId);
      if (!article) {
        return res.status(404).send("Article not found");
      }
      article = await Article.findByIdAndDelete(articleId);
      res.json({message: "Article has been deleted", article });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error.");
    }
  };
  
  

module.exports ={fetchAllarticles,addArticle,deleteArticle}