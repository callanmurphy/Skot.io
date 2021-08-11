import { connectToDatabase } from "../../../util/mongodb";

const bcrypt = require('bcrypt');
const saltRounds = 10;


export default async (req, res) => {
  const { db } = await connectToDatabase();
  if (req.method === 'POST') {
    const response = 
      bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      return db
        .collection("users")
        .insertOne({ "email" : req.body.email, "password" : hash, })
      })
    res.json(response);
  } else {
    const response = await db
      .collection("users")
      .find({email: req.body.email})

    res.json(response);
  }
};