import Photo from "../models/PhotoModel.js";
import User from "../models/UserModel.js";

const getIndexPage = async (req, res) => {
  const photos = await Photo.find().sort({ aploudedAt: -1 }).limit(3);
  const numOfUser = await User.countDocuments({});
  const numOfPhotos = await Photo.countDocuments({});

  res.render("index", { link: "index", photos, numOfUser, numOfPhotos });
};

const getAboutPage = (req, res) => {
  res.render("about", { link: "about" });
};

const getRegisterPage = (req, res) => {
  res.render("register", { link: "register" });
};

const getLoginPage = (req, res) => {
  res.render("login", { link: "login" });
};

const getLogout = (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
  });
  res.redirect("/");
};

export { getIndexPage, getAboutPage, getRegisterPage, getLoginPage, getLogout };
