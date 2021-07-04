require('dotenv').config();
const express = require('express');
const User = require("./model/user");
const app = express();
const bodyParser = require("body-parser")
const userRoutes = require('./routes/user');
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use('/', userRoutes)
const PORT = process.env.PORT || 5000;

//mongodb connetion
const uri = `mongodb+srv://process.env.name:process.env.password@cluster0.7jv8p.mongodb.net/rest?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('database connected..')

})
    .catch(() => {
        console.log('erro in database..')
    });

app.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
});

