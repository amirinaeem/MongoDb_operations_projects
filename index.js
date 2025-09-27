import { connectDB } from "./db.js"
import * as createQuery from "./queries/create.js"
import * as readQuery from "./queries/read.js"
import * as updateQuery from "./queries/update.js"
import * as deleteQuery from "./queries/delete.js"
import * as aggregateQuery from "./queries/aggregate.js"

async function run() {
  const db = await connectDB()

  console.log("\n--- CREATE ---")
  await createQuery.run(db)

  console.log("\n--- READ ---")
  await readQuery.run(db)

  console.log("\n--- UPDATE ---")
  await updateQuery.run(db)

  console.log("\n--- DELETE ---")
  await deleteQuery.run(db)

  console.log("\n--- AGGREGATE ---")
  await aggregateQuery.run(db)

  process.exit(0)
}

run().catch(console.error)
