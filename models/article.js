const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  source: String,
  author: String,
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  urlToImage: String,
  publishedAt: { type: Date, required: true },
  content: String,
});

module.exports = mongoose.model("Article", ArticleSchema);
