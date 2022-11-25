"use strict";
const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

//app.use("/");
if (typeof window !== "undefined") {
  app.get("/setCookie/:clr", (req, res) => {
    document.cookie = `color=${req.params.clr}`;
    console.log("cookie added color " + req.params.clr);
    res.json({
      message: "cookie added",
    });
  });
  app.get("/getCookie", (req, res) => {
    console.log("cookie get color");
    res.json({
      message: "cookie get color" + document.cookie.color,
    });
  });
  app.get("/deleteCookie", (req, res) => {
    document.cookie = "color=";
    res.json({
      message: "cookie deleted",
    });
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
