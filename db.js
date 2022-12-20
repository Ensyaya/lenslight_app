import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "lenslight_app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to the DB succesfully ");
    })
    .catch((err) => {
      console.log(`Db connection error: ${err}`);
    });
};


export default conn