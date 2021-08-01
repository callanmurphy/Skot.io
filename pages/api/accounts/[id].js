import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { id } = req.query

  var ObjectId = require('mongodb').ObjectId;
  const idLookup = new ObjectId(id);

  const accounts = await db
    .collection("accounts")
    .find({ _id: idLookup })
    .sort({})
    .toArray();

  res.json(accounts);
};