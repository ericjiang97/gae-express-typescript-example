// lib/app.ts
import express = require("express");

const port = process.env.port || 3000;

// Create a new express application instance
const app: express.Application = express();

app.get("/", (req, res) => {
  res.send(`Hello "World"!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
