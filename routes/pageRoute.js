import express from "express";
import {
  getAboutPage,
  getIndexPage,
  getLoginPage,
  getRegisterPage,
  getLogout,
} from "../controllers/pageController.js";

const pageRoute = express.Router();

pageRoute.route("/").get(getIndexPage);
pageRoute.route("/about").get(getAboutPage);
pageRoute.route("/register").get(getRegisterPage);
pageRoute.route("/login").get(getLoginPage);
pageRoute.route("/logout").get(getLogout);

export default pageRoute;
