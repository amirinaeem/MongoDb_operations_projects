export async function run(db) {
  const users = db.collection("users")

  const result = await users.insertOne({
  name: "Alice " + Date.now(),
  email: `alice${Date.now()}@example.com`
});

  console.log("Inserted user:", result.insertedId)
}
