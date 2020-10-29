const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const { router } = require("./routes/routes");

const app = express();

const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`APP STARTED ON ${PORT} PORT`);
    });
  } catch (e) {
    console.log(e, "Catch block");
    process.exit(1);
  } finally {
    console.log("Hello");
  }
}

startApp();
