import { connectToDatabase } from "../../../util/mongodb";

const bcrypt = require("bcrypt");
const saltRounds = 10;

export default async (req, res) => {
  const { db } = await connectToDatabase();
  // POST: create new user
  if (req.method === "POST") {
    // check if user already exists (or email field is blank)
    const responseCheck = await db
      .collection("users")
      .findOne({ email: req.body.email });
    if (responseCheck || !req.body.email) {
      return res.status(401).json({
        success: false,
        message: "An account already exists with this email",
      });
    }
    // create user if they don't already exist
    else {
      const response = bcrypt.hash(
        req.body.password,
        saltRounds,
        function (err, hash) {
          return db
            .collection("users")
            .insertOne({ email: req.body.email, password: hash });
        }
      );
      return res
        .status(200)
        .json({ success: true, message: "Account created successfully" });
    }
  }
  // GET: lookup user
  else {
    var emailExists = false;
    var correctPassword = false;
    const response = await db
      .collection("users")
      .findOne({ email: req.query.email });
    if (response) {
      emailExists = true;
      bcrypt.compare(
        req.query.password,
        response.password,
        function (err, result) {
          if (!result) {
            return res
              .status(401)
              .json({ success: false, message: "Incorrect password" });
          } else {
            return res
              .status(200)
              .json({ success: true, message: "Logged in successfully" });
          }
        }
      );
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Email not found" });
    }
  }
};
