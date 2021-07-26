const express = require('express');
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => {
    res.sendFile('./views/index.html', { root:__dirname });
});



app.listen (PORT, () => {
    console.log("listening on 3001")
});