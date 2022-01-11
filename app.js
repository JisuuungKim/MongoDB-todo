const express = require('express');
const app = express();

//conection to mongodb
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://cham0810:sarah0810%40@cluster0.hnrex.mongodb.net/todo?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result)=> app.listen(3000));

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));