// READ queries
export async function run(db) {
  const movies = db.collection("movies");

  console.log("\n1) Nolan movies:");
  console.log(await movies.find({ directors: /Christopher Nolan/i }).toArray());

  console.log("\n2) Action movies sorted by year:");
  console.log(
    await movies.find({ genres: /Action/i }).sort({ year: -1 }).toArray()
  );

  console.log("\n3) IMDb > 8:");
  console.log(
    await movies
      .find({ "imdb.rating": { $gt: 8 } }, { projection: { title: 1, imdb: 1 } })
      .toArray()
  );

  console.log("\n4) Tom Hanks & Tim Allen:");
  console.log(
    await movies.find({ cast: { $all: ["Tom Hanks", "Tim Allen"] } }).toArray()
  );

  console.log("\n5) Only Tom Hanks & Tim Allen:");
  console.log(
    await movies.find({ cast: { $size: 2, $all: ["Tom Hanks", "Tim Allen"] } }).toArray()
  );

  console.log("\n6) Comedy by Spielberg:");
  console.log(
    await movies.find({ genres: /Comedy/i, directors: /Steven Spielberg/i }).toArray()
  );
}
