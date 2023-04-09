import express from "express";
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || 2000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// setUp Template Engine
app.set("view engine", "ejs");

// Static File
app.use(express.static("public"));
app.use("./admin", express.static("public"));

// Database Connection
connectDB(DATABASE_URL);

//urlencoded
app.use(express.urlencoded({ extended: false }));

// Load Router
app.use("/", web);

app.listen(port, () => {
  console.log(` app listening on port http://localhost:${port}`);
});
