import express from "express";
import {
  createUser,
  loginUser,
  getDashboardPage,
  getAllUsers,
  getOneUser,
  follow,
  unfollow,
} from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const userRoute = express.Router();

userRoute.route("/register").post(createUser);
userRoute.route("/login").post(loginUser);
userRoute.route("/dashboard").get(authenticateToken, getDashboardPage);
userRoute.route("/").get(authenticateToken, getAllUsers);
userRoute.route("/:id").get(authenticateToken, getOneUser);
userRoute.route("/:id/follow").put(authenticateToken, follow);
userRoute.route("/:id/unfollow").put(authenticateToken, unfollow);

export default userRoute;
