import { ObjectId } from "mongodb";

export async function run(db) {
  const comments = db.collection("comments");
  const movies = db.collection("movies");

  console.log("\nDeleting specific comment...");
  await comments.deleteOne({ _id: new ObjectId("PUT_REAL_COMMENT_ID_HERE") });

  console.log("Deleting all comments for The Matrix...");
  await comments.deleteMany({ movie_id: (await movies.findOne({ title: /Matrix/i }))._id });

  console.log("Deleting movies without genres...");
  await movies.deleteMany({ genres: { $exists: true, $size: 0 } });

  console.log("✅ Deletes complete");
}
