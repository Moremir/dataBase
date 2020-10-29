const { User } = require("../model/user");
const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authorization");
const { getUsers, getOneUser } = require("../controllers/user");

const authMiddleware = (req, res, next) => {
  next();
};

router.get("/user/:id", authMiddleware, getOneUser);
router.get("/users", getUsers);
router.post("/register-user", registerUser);

module.exports = {
  router,
};
