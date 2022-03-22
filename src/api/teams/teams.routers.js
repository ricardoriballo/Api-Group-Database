const TeamsRouts = require("express").Router();
// const { isAuth } = require("../middlewares/auth.middleware");
// const upload = require("../middlewares/updateFile. middleware");

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./teams.controller");

TeamsRouts.get("/", getAll);
TeamsRouts.get("/:id", getOne);
TeamsRouts.post("/", postOne);
TeamsRouts.patch("/:id", patchOne);
TeamsRouts.delete("/:id", deleteOne);

module.exports = TeamsRouts;
