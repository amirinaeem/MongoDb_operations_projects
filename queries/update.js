export async function run(db) {
  const movies = db.collection("movies");

  console.log("\nUpdating The Matrix...");
  await movies.updateOne({ title: /Matrix/i }, { $set: { available_on: "Sflix" } });

  console.log("Incrementing Metacritic...");
  await movies.updateOne({ title: /Matrix/i }, { $inc: { metacritic: 1 } });

  console.log("Adding Gen Z to 1997 movies...");
  await movies.updateMany({ year: 1997 }, { $addToSet: { genres: "Gen Z" } });

  console.log("Increasing IMDb rating for low-rated movies...");
  await movies.updateMany({ "imdb.rating": { $lt: 5 } }, { $inc: { "imdb.rating": 1 } });

  console.log("✅ Updates complete");
}
