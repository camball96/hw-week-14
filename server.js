const express = require('express');
const fs = require("fs");
const handlebars = require("express-handlebars");
const helpers = require("./utils/helpers");

const app = express();


const PORT = process.env.PORT || 3001;


const hbs = handlebars.create({helpers})

// establishing template engine - handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");



app.get("/", (req, res) => {
    res.render('main');
});
app.get("/login", (req, res) => {
    res.render('login');
});
app.get("/signup", (req, res) => {
    res.render('signup');
});



app.listen (PORT, () => {
    console.log("listening on 3001")
});