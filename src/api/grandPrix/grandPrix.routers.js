const GrandPrixRoutes = require("express").Router();
const { isAuth } = require("../../middlewares/auth.middlewares");
const upload = require("../../middlewares/updateFiles.middleware");

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./grandPrix.controller");

GrandPrixRoutes.get("/", getAll);
GrandPrixRoutes.get("/:id", getOne);
GrandPrixRoutes.post("/",  postOne);
GrandPrixRoutes.patch("/:id" ,  patchOne);
GrandPrixRoutes.delete("/:id" ,  deleteOne);

module.exports = GrandPrixRoutes;
