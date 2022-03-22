const PilotRouter = require("express").Router();
const { isAuth } = require("../../middlewares/auth.middlewares");
const { upload } = require("../../middlewares/updateFiles.middleware");
const { deleteImgCloudinary } =require ("../../middlewares/deleteFile.middleware")


const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./pilots.controller");

PilotRouter.get("/", getAll);
PilotRouter.get("/:id", getOne);
PilotRouter.post("/",  upload.single("img"), postOne);
PilotRouter.patch("/:id",  upload.single('img'), patchOne);
PilotRouter.delete("/:id",  deleteOne);
 
module.exports = PilotRouter;
