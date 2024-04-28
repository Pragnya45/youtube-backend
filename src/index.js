//require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import ConnectDB from "../db/index.js";

dotenv.config({
  path: "./env",
});

ConnectDB();
// const app = express();
// const port = 3000 || process.env.PORT;
// import express from "express";
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw error;
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
