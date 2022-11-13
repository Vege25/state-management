"use strict";
const {
  getUser,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../models/userModel");
const { validationResult } = require("express-validator");
const { httpError } = require("../utils/errors");

const cookie_get = async (req, res, next) => {
  try {
    const cookie = await getUser(req.params.id, next);
    if (user.length < 1) {
      next(httpError("No user found", 404));
      return;
    }
    res.json(user.pop());
  } catch (e) {
    console.error("user_get", e.message);
    next(httpError("Internal server error", 500));
  }
};

const cookie_post = async (req, res, next) => {
  try {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors.
      // Error messages can be returned in an array using `errors.array()`.
      console.error("user_post validation", errors.array());
      next(httpError("Invalid data", 400));
      return;
    }

    const data = [req.body.name, req.body.email, req.body.passwd];

    const result = await addUser(data, next);
    if (result.affectedRows < 1) {
      next(httpError("Invalid data", 400));
      return;
    }

    res.json({
      message: "user added",
      user_id: result.insertId,
    });
  } catch (e) {
    console.error("user_post", e.message);
    next(httpError("Internal server error", 500));
  }
};

const cookie_delete = async (req, res, next) => {
  try {
    const result = await deleteUser(req.params.id, next);
    if (result.affectedRows < 1) {
      next(httpError("No user deleted", 404));
      return;
    }
    res.json({
      message: "user deleted",
    });
  } catch (e) {
    console.error("user_delete", e.message);
    next(httpError("Internal server error", 500));
  }
};

module.exports = {
  cookie_get,
  cookie_post,
  cookie_delete,
};
