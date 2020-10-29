const { User } = require("../model/user");

async function registerUser(req, res) {
  const { name, email, password } = req.body;

  if (!name.trim() || !email.trim() || !password.trim()) {
    return res.status(400).json({
      message: "Укажите почту или имя или пароль",
    });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json("Такой пользователь существует");
  }

  const user = await User.create(req.body);

  return res.status(200).json({
    message: "Пользователь успешно зарегистрирован",
    user: user,
  });
}

module.exports = {
  registerUser,
};
