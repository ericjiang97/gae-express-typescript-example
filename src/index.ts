// lib/app.ts
import express = require("express");
import { Gstore } from "gstore-node";
import { Datastore } from "@google-cloud/datastore";

const gstore = new Gstore();
const datastore = new Datastore({
  projectId: process.env.PROJECT_ID
});

// Then connect gstore to the datastore instance
gstore.connect(datastore);

const port = process.env.port || 3000;

// Create a new express application instance
const app: express.Application = express();

app.get("/", (req, res) => {
  res.send(`Hello "World"!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
