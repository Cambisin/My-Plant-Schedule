require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

mongoose.connect(process.env.DATABASE_URL, {});

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

//app.listen(PORT, () => {
    // eslint-disable-next-line no-template-curly-in-string
    //console.log('Listening on ${PORT}');
//});

