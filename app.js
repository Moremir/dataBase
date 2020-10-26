const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require("dotenv");
const { getUsers } = require('./controllers/user')
const { registerUser } = require("./controllers/authorization");
dotenv.config();


const PORT = process.env.PORT || 5050;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/api/register-user', registerUser);
app.get('/api/users', getUsers);

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
        console.log(e)
        process.exit(1);
    } finally {
        console.log(`Hello`)
    }
}


startApp()




