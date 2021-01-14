const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({message: `Hello World`});
});

app.listen(3000, (req, res) => {
  console.log(`Starting the api`);
});
