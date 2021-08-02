import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const accounts = await db
    .collection("accounts")
    .find({})
    .sort({ "Edit Date": -1 })
    .limit(2)
    .toArray();

  res.json(accounts);
};