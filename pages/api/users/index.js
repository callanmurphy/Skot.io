import { connectToDatabase } from "../../../util/mongodb";

const bcrypt = require('bcrypt');
const saltRounds = 10;


export default async (req, res) => {
  const { db } = await connectToDatabase();
  if (req.method === 'POST') {
    console.log('-- post')
    console.log('post')
    const response = 
      bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      return db
        .collection("users")
        .insertOne({ "email" : req.body.email, "password" : hash, })
      })
    res.json(response);
  } else {
    console.log('-- get')
    const response = await db
      .collection("users")
      .findOne({ email: req.query.email })
    console.log(response)
    res.json(response);
  }
};