const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  authorName: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
    // unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
  date: {
    type: String,
  }
});

const News = mongoose.model("News", newsSchema);

module.exports = {
  News,
};
