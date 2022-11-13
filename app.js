"use strict";
const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/");

app.get("/setCookie", (req, res, clr) => {
  res.render("home");
});
app.get("/getCookie", (req, res) => {
  res.render("home");
});
app.get("/deleteCookie", (req, res) => {
  res.render("home");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
