const express = require('express');
const axios = require('axios');
const app = express();


app.set("view engine", "ejs");

app.get("/", (req, res) => {
  axios.get(`http://${process.env.BASE_URL}`)
    .then((data) => {
      res.render("index", data);
    }).catch((error) => {
      console.log(error);
    });
});

app.listen(3001, (req, res) => {
  console.log(`Starting the app`);
});
