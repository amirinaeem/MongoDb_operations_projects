export async function run(db) {
  const movies = db.collection("movies");

  console.log("\nMovies released each year:");
  console.log(
    await movies.aggregate([
      { $group: { _id: "$year", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]).toArray()
  );

  console.log("\nAverage IMDb rating per director:");
  console.log(
    await movies.aggregate([
      { $match: { "imdb.rating": { $gt: 0 } } },
      { $group: { _id: "$directors", avgRating: { $avg: "$imdb.rating" } } },
      { $sort: { avgRating: -1 } },
      { $limit: 10 }
    ]).toArray()
  );
}
