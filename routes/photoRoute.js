import express from "express";
import {
  createPhoto,
  getAllPhotos,
  getOnePhoto,
  deletePhoto,
  updatePhoto,
} from "../controllers/photoController.js";

const photoRoute = express.Router();

photoRoute.route("/").post(createPhoto).get(getAllPhotos);

photoRoute.route("/:id").get(getOnePhoto);
photoRoute.route("/:id").delete(deletePhoto);
photoRoute.route("/:id").put(updatePhoto);

export default photoRoute;
