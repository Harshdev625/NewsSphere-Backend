const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  source: String,
  author: String,
  title: {
    type: String,
    required: true,
  },
  description: String,
  url: {
    type: String,
    required: true,
  },
  urlToImage: String,
  publishedAt: {
    type: Date,
    required: true,
  },
  content: String,
});

module.exports = mongoose.model("Article", ArticleSchema);
