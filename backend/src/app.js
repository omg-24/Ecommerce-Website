import express from "express"
import testRoute from "./routes/test.routes.js"

const app = express()

app.use(express.json())

app.use("/api/test", testRoute)

export default app