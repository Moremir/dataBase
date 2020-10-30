const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authorization");
const { getUsers, getOneUser } = require("../controllers/user");

const { publishNews, getAllNews, getOneNews } = require("../controllers/news");

const dateMiddleware = (req, res, next) => {
  req.day = new Date().toDateString();
  next();
};

router.get("/user/:id", dateMiddleware, getOneUser);
router.get("/users", getUsers);
router.post("/register-user", registerUser);

router.get("/news", getAllNews);
router.get("/news/:newsId", dateMiddleware, getOneNews);
router.post("/publish-news", dateMiddleware, publishNews);

module.exports = {
  router,
};
