import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";

var adapter = new FileSync("./userDb.json");
var db = low(adapter);

// Initialize Express app
const app = express();

// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = "dsfdsfsdfdsvcsvdfgefg";

// Set up CORS and JSON middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic home route for the API
app.get("/", (_req, res) => {
  res.send(
    "Auth API.\nPlease use POST /auth & POST /verify for authentication"
  );
});

app.post("/checkUserExistance", (req, res) => {
  const { email } = req.body;
  console.log("email:", email);
  const user = db
    .get("users")
    .value()
    .filter((user) => email === user?.email);
  console.log("this is the user", user);
  res.status(200).json({
    status: user.length === 1 ? "User exist" : "User doesnt exist",
    userExists: user.length === 1,
  });
});

app.post("/verify", (req, res) => {
  const { email, password } = req.body;
  const account = db
    .get("users")
    .value()
    .filter((user) => email === user?.email && password === user?.password);
  console.log("this is acc detail:", account);
  res.status(200).json({
    status: account.length === 1 ? "account exist" : "account doesnt exist",
    accountExist: account.length === 1,
  });
});

app.post("/register", (req, res) => {
  const { username, email, password, phone } = req.body;
  console.log(
    `this is user:${username}, email:${email},password:${password},phone:${phone}`
  );
  db.get("users").push({ email, password, username, phone }).write();

  res.status(200).json({ email, password, username, phone });
});

app.listen(3080, () => {
  console.log("server listening at port: 3080");
});
