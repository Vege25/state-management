"use strict";
const express = require("express");
const {
  cookie_get,
  cookie_post,
  cookie_delete,
} = require("../controllers/cookieController");
const router = express.Router();

router
  .route("/")
  .get(cookie_get)
  .post(
    cookie_post
  )
  .post(
    cookie_post
  ).delete(
    cookie_delete
  );
module.exports{

}