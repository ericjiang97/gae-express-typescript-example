// lib/app.ts
require("dotenv").config();
import express = require("express");
import { Gstore } from "gstore-node";
import { Datastore } from "@google-cloud/datastore";
var bodyParser = require("body-parser");

import UserModel from "./models/user.model";
const { gstore } = require("./config/gstore");

const datastore = new Datastore({
  projectId: process.env.PROJECT_ID
});

// Then connect gstore to the datastore instance
gstore.connect(datastore);

const port = process.env.port || 3000;

// Create a new express application instance
const app: express.Application = express();

// create application/json parser
var jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.send(`Hello "World"!`);
});

app.get("/users/:userId", (req, res) => {
  UserModel.get(req.param.userId)
    .then(entity => {
      console.log(entity);
      res.send(entity);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.post("/users", jsonParser, (req, res) => {
  const user = new UserModel(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
