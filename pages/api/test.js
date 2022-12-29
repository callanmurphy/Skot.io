import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("secura");

    const users = await db
      .collection("users")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(users);
  } catch (e) {
    console.error(e);
  }
};
