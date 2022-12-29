import { connectToDatabase } from "../../../util/mongodb";

const bcrypt = require("bcrypt");
const saltRounds = 10;

export default async (req, res) => {
  const { db } = await connectToDatabase();
  // POST: create new user
  console.log("-- req.method:", req.method);
  if (req.method === "POST") {
    const response = bcrypt.hash(
      req.body.password,
      saltRounds,
      function (err, hash) {
        return db
          .collection("users")
          .insertOne({ email: req.body.email, password: hash });
      }
    );
    res.json(response);
  }
  // GET: lookup user
  else {
    let emailExists = false;
    let correctPassword = false;
    const response = await db
      .collection("users")
      .findOne({ email: req.query.email });
    // .toArray();
    if (response) {
      console.log("-- user found!");
      emailExists = true;
      bcrypt.compare(
        req.query.password,
        response.password,
        function (err, result) {
          if (result == true) {
            correctPassword = true;
            console.log("-- successful login!");
          } else {
            console.log("-- incorrect password");
          }
        }
      );
    } else {
      console.log("-- email not found");
    }
    console.log("-- response:", response);
    res
      .status(200)
      .json({
        response,
        emailExists: emailExists,
        correctPassword: correctPassword,
      });
  }
};
